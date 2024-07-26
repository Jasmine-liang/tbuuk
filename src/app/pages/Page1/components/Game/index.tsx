"use client";
import styles from "./index.module.scss";
import ImageU from "@/components/Image";
import useStore from "@/stores/useStore";
import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";
import DATA from "@/configs/data";

const Game = () => {
  const gameInit = () => {
    const canvas = document.getElementById("ggl") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    const container = document.getElementById("container")!;

    // Configuration parameters
    const brushSize = window.innerWidth * 0.05; // Set brush size
    const revealThreshold = 0.5; // Set reveal threshold ratio, 0.5 means 50%
    const resetTime = 2000; // Set reset time to 2 seconds

    // Set canvas size to match container
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    // Load scratch-off surface image
    const coverImage = new Image();
    coverImage.src = "/image/page1-logo.png"; // Surface image URL
    coverImage.onload = () => {
      ctx.drawImage(coverImage, 0, 0, canvas.width, canvas.height);
      console.log("Image loaded and drawn");
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
      isDrawing = true;
      draw(evt);
    }

    function endDrawing(): void {
      isDrawing = false;
      ctx.beginPath();
      checkReveal();
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
        console.log("Reveal threshold reached, clearing canvas");

        // Set reset time
        setTimeout(() => {
          // Reset globalCompositeOperation
          ctx.globalCompositeOperation = "source-over";
          // Ensure canvas size matches container
          canvas.width = container.offsetWidth;
          canvas.height = container.offsetHeight;
          ctx.drawImage(coverImage, 0, 0, canvas.width, canvas.height);
          console.log("Reset time reached, redrawing image");
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
  };

  const { userId, cardCount, setCardCount } = useStore();
  const [isGame, setIsGame] = useState(0);
  const { luckDraw } = useApi();
  const [result, setResult] = useState(DATA.page1);

  const startGame = async () => {
    if (isGame) return;
    setIsGame(1);
    setCardCount(cardCount - 1);
    const res = await luckDraw({
      userid: String(userId),
      profile_photo: "",
      playmode: "1",
    });

    if (res) {
      setResult(res);
    }
  };

  useEffect(() => {
    gameInit();
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
          {result.number ? (
            <ImageU
              className={styles.prize}
              src={DATA.page1.list[Number(result.number) - 1].icon}
            />
          ) : (
            <div
              className={styles.logo}
              onTouchStart={startGame}
              onMouseUp={startGame}
            ></div>
          )}
          {!cardCount && !isGame && (
            <div className="ban">
              <div>Invite to get more cards!</div>
            </div>
          )}
        </div>
        <div className={styles.times}>
          <div className={styles.label}>remaining times:</div>
          <div className={styles.value}>10</div>
          <ImageU className={styles.add} src="image/icon162.png" />
        </div>
      </div>
    </div>
  );
};

export default Game;
