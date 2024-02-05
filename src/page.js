"use client";
import { useState } from "react";
import us from './Us.png'

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    document.getElementById("no-image").src=getNoButtonGif(getNoButtonText());
    setNoCount(noCount + 1);
  };

  const phrases = {
    "No": "https://tenor.com/view/grumpy-cat-cat-meme-angry-cat-angry-cat-stare-gif-10677711566297646515.gif",
    "Bro tf.": "https://tenor.com/view/wtff-cat-confused-orange-gif-25858653.gif",
    "Why not.": "https://tenor.com/view/milk-cat-cat-milk-funny-cat-cat-milk-gif-4159883486812145935.gif",
    "Is this because I ate your chicken nuggets.": "https://tenor.com/view/cute-kitty-gif-13192840.gif",
    "I didn't know they were yours.": "https://tenor.com/view/give-food-please-cat-adorable-gif-22933249.gif",
    "Babe, please.": "https://tenor.com/view/cat-kitty-kitten-money-rich-gif-26085286.gif",
    "I will gib you moners.": "https://tenor.com/view/cat-massage-kitty-kitten-cute-gif-17418425.gif",
    "What about a massage?": "https://tenor.com/view/chocolate-ice-cream-cone-vanilla-gif-26189833.gif",
    "Ice cream?": "https://tenor.com/view/cat-driving-cat-driving-gif-369381050674618482.gif",
    "What about a new car?": "https://tenor.com/view/angry-cat-angrycat-orange-orangecat-gif-12955247756667881418.gif",
    "I'm upset we've gotten to this point!": "https://tenor.com/view/kiss-kitty-mwah-love-you-cat-gif-23171215.gif",
    "But I still love you.": "https://tenor.com/view/cat-changing-the-clock-changing-the-time-kitty-cat-cute-gif-17202806.gif",
    "Maybe I'll try again later.": "https://tenor.com/view/kittensleep-cute-catsleep-dodo-bonne-nuit-gif-15339389627910196114.gif",
    "Maybe take a nap and come back?": "https://tenor.com/view/cat-waiting-cat-wait-cat-patient-cat-cute-cat-gif-2663442571218967623.gif",
    "Until then I'll be waiting.": "https://tenor.com/view/cat-cat-love-gif-2795368028256097883.gif",
    "I love you baby.": "https://tenor.com/view/cat-cat-love-gif-2795368028256097883.gif",
}


  const getNoButtonText = () => {
    return Object.keys(phrases)[Math.min(noCount, Object.keys(phrases).length - 1)];
  };

  const getNoButtonGif = (phrase) =>{
    return phrases[phrase];
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <h1>YAAAAAAAAAAAAAAAAAAAY</h1>
        <img src="https://tenor.com/view/dnce-gif-14762310134329663850.gif" />
        <div className="text-4xl font-bold my-4">I'm so happy!!</div>
        <img src="https://tenor.com/view/sleep-cat-two-cat-cat-cat-love-gif-23651667.gif" />
        <div className="text-4xl font-bold my-4">This is us.</div>
        <img src="https://tenor.com/view/cats-cat-love-two-cats-cat-gif-21315830.gif" />
        <div className="text-4xl font-bold my-4">This too.</div>
        <img src="https://tenor.com/view/holaroberto3-gif-18074828828395628547.gif" />
        <div style={{"margin-bottom": "10%"}} className="text-4xl font-bold my-4">I can't wait to spend the rest of our lives together!</div>
        <div style={{"margin-bottom": "10%"}} className="text-4xl font-bold my-4">I drew a picture of us! I hope you like it!</div>
        <img src={us} />
        </>
      ) : (
        <>
          <h1>Dearest, Shanikka.</h1>
          <img id="no-image" style={{"height": "75% important"}} src="https://tenor.com/view/kitty-pinksnoodie-gif-27315440.gif" />
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}