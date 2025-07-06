"use client";
import React, { createRef } from "react";
import ReactHowler from "react-howler";
import raf from "raf";
import { Box, debounce, Grid, IconButton, SvgIcon, Typography } from "@mui/material";
import pauseIcon from "@/shared/icons/pause.svg";
import loadingIcon from "@/shared/icons/loading.svg";
import nextIcon from "@/shared/icons/next.svg";
import playIcon from "@/shared/icons/play.svg";
import { parseTime } from "@/app/tracks/helpers";
import Image from "next/image";
import spotifyIcon from "@/shared/icons/spotifyFill.svg";
import youtubeIcon from "@/shared/icons/youtubeFill.svg";
import yandexIcon from "@/shared/icons/yandexFill.svg";
import appleIcon from "@/shared/icons/appleFill.svg";

import Link from "next/link";
import { songsArr } from "@/app/tracks/constants";
import { usePlayerContext } from "@/providers/player-store-provider";
import { animated, Spring } from "@react-spring/web";


interface AudioPlayerState {
  activeSong: typeof songsArr[number] | null;
  playing: boolean;
  loaded: boolean;
  loop: boolean;
  mute: boolean;
  volume: number;
  seek: number;
  rate: number;
  isSeeking: boolean;
  hours: number;
  minutes: number;
  seconds: number;
  duration: number;
  blackBoxTop: string;
}

interface AudioPlayerStateProps {
  context: ReturnType<typeof usePlayerContext>;
}

class AudioPlayer extends React.Component<AudioPlayerStateProps, AudioPlayerState> {
  state: AudioPlayerState;
  player: ReactHowler | undefined | null = undefined;
  _raf: number = 0;
  refInput = createRef<HTMLInputElement>();
  private unsubscribe: (() => void) | undefined;

  constructor(props: AudioPlayerStateProps) {
    super(props);

    this.state = {
      playing: this.props.context.getState()?.isPlay ?? false,
      activeSong: this.props.context.getState()?.activeSong ?? null,
      loaded: false,
      loop: false,
      mute: false,
      volume: 1.0,
      seek: 0.0,
      rate: 1,
      isSeeking: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
      duration: 0,
      blackBoxTop: "100vh"
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnEnd = this.handleOnEnd.bind(this);
    this.handleOnPlay = this.handleOnPlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.renderSeekPos = this.renderSeekPos.bind(this);
    this.handleLoopToggle = this.handleLoopToggle.bind(this);
    this.handleMuteToggle = this.handleMuteToggle.bind(this);
    this.handleMouseDownSeek = this.handleMouseDownSeek.bind(this);
    this.handleMouseUpSeek = this.handleMouseUpSeek.bind(this);
    this.handleSeekingChange = this.handleSeekingChange.bind(this);
    this.changeWindowSize = this.changeWindowSize.bind(this);
    this.changeWindowSize = debounce(this.changeWindowSize, 100);
  }

  changeWindowSize() {
    // if (this.state.activeSong === null) {
    //   return;
    // }
    this.setState({
      blackBoxTop: this.refInput.current ? `${this.refInput.current.offsetTop + (this.refInput.current.offsetHeight / 2)}px` : "100vh"
    });
  }

  componentDidMount() {
    this.changeWindowSize();
    window.addEventListener("resize", this.changeWindowSize);

    this.unsubscribe = this.props.context.subscribe((state) => {
      this.setState({
        playing: state.isPlay,
        activeSong: state.activeSong,
        blackBoxTop: this.refInput.current ? `${this.refInput.current.offsetTop + (this.refInput.current.offsetHeight / 2)}px` : "100vh"
      });

      if (!this.refInput.current) {
        setTimeout(() => {
          if (this.refInput.current) {
            this.setState({
              blackBoxTop: this.refInput.current ? `${this.refInput.current.offsetTop + (this.refInput.current.offsetHeight / 2)}px` : "100vh"
            });

          }
        }, 100);
      }
    });
  }

  componentWillUnmount() {
    this.clearRAF();
    window.removeEventListener("resize", this.changeWindowSize);
    this.unsubscribe?.();
  }

  handleToggle() {
    this.changePlaying();
  }

  handleOnLoad() {
    if (!this.player) return;

    this.setState({
      loaded: true,
      duration: this.player.duration()
    });
  }

  handleOnPlay() {
    this.changePlaying(true);
    this.renderSeekPos();
  }

  handleOnEnd() {
    this.changePlaying(false);
    this.clearRAF();
  }

  handleStop() {
    if (!this.player) return;

    this.player.stop();
    this.changePlaying(false);
    this.renderSeekPos();
  }

  handleLoopToggle() {
    this.setState({
      loop: !this.state.loop
    });
  }

  handleMuteToggle() {
    this.setState({
      mute: !this.state.mute
    });
  }

  handleMouseDownSeek() {
    this.setState({
      isSeeking: true
    });
  }

  handleMouseUpSeek(e: React.MouseEvent<HTMLInputElement>) {
    if (!this.player) return;

    this.setState({
      isSeeking: false
    });

    this.player.seek(+(e.target as HTMLInputElement).value);
  }

  handleSeekingChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      seek: parseFloat(e.target.value)
    });
  }

  renderSeekPos() {
    if (!this.player) return;

    if (!this.state.isSeeking) {
      this.setState({
        seek: this.player.seek()
      });
    }
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos);
    }
  }

  clearRAF() {
    raf.cancel(this._raf);
  }

  changePlaying(value?: boolean) {
    this.props.context.getState().changeIsPlay(value === undefined ? !this.state.playing : value);
  }

  changeSongs(currentIndex: number, isNext: boolean) {
    const song = songsArr[isNext ? currentIndex + 1 : currentIndex - 1];
    if (song) {
      this.props.context.getState().setActiveSong(song);
      this.props.context.getState().changeIsPlay(true);
    }

  }

  render() {

    const indexSong = songsArr.findIndex((item) => item.id === this.state.activeSong?.id);


    const player = (
      <Spring
        from={{ opacity: 0, top: "-100px", pointerEvents: "none" }}
        to={
          {
            opacity: this.state.activeSong ? 1 : 0,
            top: this.state.activeSong ? "0px" : "-100px",
            pointerEvents: this.state.activeSong ? "auto" : "none"
          }}
      >
        {style => <animated.div style={{
          ...style,
          display: "flex",
          flexDirection: "column",
          // border: "1px solid blue",
          flexShrink: 0
        }}>


          <ReactHowler
            src={this.state.activeSong?.audioSrc ?? songsArr[0].audioSrc}
            playing={this.state.playing}
            onLoad={this.handleOnLoad}
            onPlay={this.handleOnPlay}
            onEnd={this.handleOnEnd}
            loop={this.state.loop}
            mute={this.state.mute}
            volume={this.state.volume}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            ref={(ref) => (this.player = ref)}
          />
          <Box
            className={"audio-player__black-box"}
            sx={{
              top: this.state.blackBoxTop
            }}
          />
          <Grid container wrap={"nowrap"}>
            {
              this.state.activeSong && <Image src={this.state.activeSong.image} alt={this.state.activeSong.title}
                                              className={"audio-player__image"} />
            }
            {/*<Image src={this.state.activeSong.image} alt={this.state.activeSong.title}*/}
            {/*       className={"audio-player__image"} />*/}
            <Grid container flexDirection={"column"} className="audio-player__input-container" wrap={"nowrap"}>
              <input
                className="audio-player__input"
                type="range"
                min="0"
                max={this.state.duration ? this.state.duration.toFixed(2) : 0}
                step=".01"
                value={this.state.seek}
                onChange={this.handleSeekingChange}
                onMouseDown={this.handleMouseDownSeek}
                onMouseUp={this.handleMouseUpSeek}
                ref={this.refInput}
              />

              <Grid container className="audio-player__text">
                <Typography variant={"arsenal_20/12"}>{parseTime(this.state.seek.toFixed(2)).join(":")}</Typography>
                <Typography
                  variant={"arsenal_20/12"}>{this.state.duration ? parseTime(this.state.duration.toFixed(2)).join(":") : "-"}</Typography>

              </Grid>
              <Grid container sx={{ justifyContent: "center" }}>
                <IconButton className="audio-player__next-button" disabled={indexSong === 0} onClick={() => {
                  this.changeSongs(indexSong, false);
                }}>
                  <SvgIcon fontSize={"medium"} component={nextIcon} viewBox="0 0 50 50"
                           sx={{ transform: "rotate(180deg)" }} />
                </IconButton>
                <IconButton className="audio-player__play-button" onClick={this.handleToggle}
                            disabled={!this.state.loaded}>


                  {
                    !this.state.loaded ?
                      <SvgIcon fontSize={"large"} component={loadingIcon} viewBox="0 0 80 80" className={"spinner"} />
                      : this.state.playing ? <SvgIcon fontSize={"large"} component={pauseIcon} viewBox="0 0 80 80" /> :
                        <SvgIcon fontSize={"large"} component={playIcon} viewBox="0 0 44 44" />
                  }
                </IconButton>
                <IconButton disabled={indexSong === (songsArr.length - 1)} onClick={() => {
                  this.changeSongs(indexSong, true);
                }}>
                  <SvgIcon fontSize={"medium"} component={nextIcon} viewBox="0 0 50 50" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>


          <Grid container className="audio-player__links"
          >
            {
              this.state.activeSong?.spotify && <Link
                href={this.state.activeSong.spotify}
                target="_blank"
                rel="noreferrer"
              >
                <SvgIcon fontSize={"small"} component={spotifyIcon} viewBox="0 0 44 44" />
              </Link>
            }
            {
              this.state.activeSong?.appleMusic && <Link
                href={this.state.activeSong.appleMusic}
                target="_blank"
                rel="noreferrer"

              >
                <SvgIcon fontSize={"small"} component={appleIcon} viewBox="0 0 45 45" />
              </Link>
            }

            {
              this.state.activeSong?.youtube && <Link
                href={this.state.activeSong.youtube}
                target="_blank"
                rel="noreferrer"
              >
                <SvgIcon fontSize={"small"} component={youtubeIcon} viewBox="0 0 45 45" />
              </Link>
            }

            {
              this.state.activeSong?.yandex && <Link
                href={this.state.activeSong.yandex}
                target="_blank"
                rel="noreferrer"
              >
                <SvgIcon fontSize={"small"} component={yandexIcon} viewBox="0 0 45 45" />
              </Link>
            }


          </Grid>

        </animated.div>}
      </Spring>
    );

    return (
      <>
        {/* Скрытые плееры для предзагрузки всех песен */}
        {songsArr.map(song => (
          <ReactHowler
            key={`preload-${song.id}`}
            src={song.audioSrc}
            preload={true}
            volume={0} // Делаем не слышимыми
            playing={false}
          />
        ))}

        {this.state.activeSong && player}
      </>
    );
  }
}


export default AudioPlayer;