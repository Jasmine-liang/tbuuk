"use client";
import styles from "./index.module.scss";
import ImageU from "@/components/Image";
import useStore from "@/stores/useStore";
import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";
import DATA from "@/configs/data";

const Game = () => {
  const { luckDraw } = useApi();
  const {
    userId,
    cardCount,
    setCardCount,
    cardFree,
    resetCountdown,
    startCountdown,
  } = useStore();
  const [isGame, setIsGame] = useState(0);
  const [indexResult, setIndexResult] = useState(-1);
  const [textResult, setTextResult] = useState("");
  const formattedTime = useStore((state) => state.formattedTime);

  const addFreeCard = async () => {
    console.log(cardFree);
    if (5 - cardFree > 0) {
      resetCountdown();
      startCountdown();
    }
  };

  const getResult = async () => {
    setCardCount(cardCount - 1);
    const res = await luckDraw({
      userid: String(userId),
      profile_photo: "",
      playmode: "1",
    });
    setIndexResult(res.number);
    setTextResult(res.prize);
  };

  useEffect(() => {
    if (isGame === 1) {
      getResult();
    }
  }, [isGame]);

  useEffect(() => {
    if (isGame === 2 && textResult) {
      alert(textResult);
    }
  }, [isGame, textResult]);

  useEffect(() => {
    const canvas = document.getElementById("ggl") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    const container = document.getElementById("container")!;

    // Configuration parameters
    const brushSize = window.innerWidth * 0.05;
    const revealThreshold = 0.5;
    const resetTime = 2000;

    // Set canvas size to match container
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    // Load scratch-off surface image
    const coverImage = new Image();
    coverImage.src = "/image/page1-logo.png"; // Surface image URL
    coverImage.onload = () => {
      ctx.drawImage(coverImage, 0, 0, canvas.width, canvas.height);
    };

    // Listen for mouse events
    let isDrawing = false;

    function getMousePos(
      canvas: HTMLCanvasElement,
      evt: MouseEvent | Touch
    ): { x: number; y: number } {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      return {
        x: (evt.clientX - rect.left) * scaleX,
        y: (evt.clientY - rect.top) * scaleY,
      };
    }

    function startDrawing(evt: MouseEvent | Touch): void {
      setIsGame(1);
      isDrawing = true;
      draw(evt);
    }

    function endDrawing(): void {
      isDrawing = false;
      ctx.beginPath();
      checkReveal();
    }

    function resetGame(): void {
      setIndexResult(-1);
      ctx.globalCompositeOperation = "source-over";
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      ctx.drawImage(coverImage, 0, 0, canvas.width, canvas.height);
    }

    function draw(evt: MouseEvent | Touch): void {
      if (!isDrawing) return;

      const pos = getMousePos(canvas, evt);
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, brushSize, 0, Math.PI * 2);
      ctx.fill();
    }

    function checkReveal(): void {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparentPixels = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) {
          transparentPixels++;
        }
      }

      const revealRatio = transparentPixels / (canvas.width * canvas.height);
      if (revealRatio > revealThreshold) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        setTimeout(() => {
          setIsGame(2);
        }, 1);
        setTimeout(() => {
          setIsGame(0);
          resetGame();
        }, resetTime);
      }
    }

    canvas.addEventListener("mousedown", (evt) => startDrawing(evt));
    canvas.addEventListener("mouseup", endDrawing);
    canvas.addEventListener("mousemove", (evt) => draw(evt));

    // Touch events
    canvas.addEventListener("touchstart", (evt) =>
      startDrawing(evt.touches[0])
    );
    canvas.addEventListener("touchend", endDrawing);
    canvas.addEventListener("touchmove", (evt) => {
      draw(evt.touches[0]);
      evt.preventDefault();
    });
  }, []);

  const list = [
    {
      id: 1,
      name: "TokenA",
      icon: "image/icon7.png",
    },
    {
      id: 2,
      name: "TokenB",
      icon: "image/icon8.png",
    },
    {
      id: 3,
      name: "TokenC",
      icon: "image/icon9.png",
    },
    {
      id: 4,
      name: "Points",
      icon: "image/icon10.png",
    },
  ];

  return (
    <div className={styles.Game}>
      <ImageU className={styles.load} src={"image/icon7.png"} />
      <ImageU className={styles.load} src={"image/icon8.png"} />
      <ImageU className={styles.load} src={"image/icon9.png"} />
      <ImageU className={styles.load} src={"image/icon10.png"} />
      <div className={styles.top}>
        {list.map((item) => (
          <div key={item.id} className={styles.item}>
            <ImageU className={styles.icon} src={item.icon} />
            <div className={styles.name}>{item.name}</div>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>scratch off tickets</div>
        <div id="container" className={styles.canvas}>
          <canvas
            id="ggl"
            className={styles.ggl}
            style={{ width: "100%", height: "100%" }}
          ></canvas>
          {indexResult != -1 && (
            <ImageU
              className={styles.prize}
              src={DATA.page1.list[indexResult - 1].icon}
            />
          )}
          {!cardCount && !isGame && (
            <div className="ban">
              <div>Invite to get more cards!</div>
            </div>
          )}
        </div>
        <div className={styles.times}>
          <div className={styles.label}>remaining times:</div>
          <div className={styles.value}>{formattedTime()}</div>
          <ImageU
            onClick={addFreeCard}
            className={styles.add}
            src="image/icon162.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
