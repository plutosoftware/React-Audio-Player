import React, { useEffect, useRef, useState } from "react";
import song from "./song.mp3";
import "./App.css";

const App = () => {
    const audio = useRef();
    const range = useRef();
    const [rangeValue, setRangeValue] = useState(0);
    const [isLoop, setIsLoop] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setRangeValue(audio.current.currentTime);
            console.log(rangeValue);
            console.log(audio.current.currentTime);
        }, 1000);
    }, []);

    const handlePlay = () => {
        audio.current.play();
        // audio.current.playbackRate = 2;    ------- Setting playback speed
    };

    const handlePause = () => {
        audio.current.pause();
    };

    const loop = () => {
        setIsLoop(true);
    };

    const handleForward = () => {
        audio.current.currentTime += 10;
    };

    const handleBackward = () => {
        audio.current.currentTime -= 10;
    };

    const restartSong = () => {
        audio.current.currentTime = 0;
        audio.current.play();
    };

    return (
        <section>
            {/* This song src can be replaced with your own song */}
            <audio ref={audio} id="audio" src={song} loop={isLoop} />

            {/* The max time can be set by user song's duration */}
            <input
                value={rangeValue}
                ref={range}
                type="range"
                step="0.1"
                min="0"
                max="236"
                onChange={(e) => {
                    audio.current.currentTime = e.target.value;
                }}
            />

            <div>
                <button onClick={() => handlePlay()}>
                    <i class="fas fa-play"></i>
                </button>
                <button onClick={() => handleBackward()}>
                    <i class="fas fa-fast-backward"></i>
                </button>
                <button onClick={() => handlePause()}>
                    <i class="fas fa-pause"></i>
                </button>
                <button onClick={() => handleForward()}>
                    <i class="fas fa-fast-forward"></i>
                </button>
                <button onClick={() => restartSong()}>
                    <i class="fas fa-square"></i>
                </button>
                <button onClick={() => loop()}>
                    <i class="fas fa-undo-alt"></i>
                </button>
            </div>
        </section>
    );
};

export default App;
