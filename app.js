function merryChristmasMessage() {
  const messages = [
      "🎄 Merry Christmas! 🎅",
      "✨ Wishing you joy, peace, and love this holiday season! ✨",
      "🎁 Have a magical holiday season! 🎁",
      "❄️ Let it snow, let it glow – Happy Holidays! ❄️",
      "🌟 Warm wishes for a joyful holiday season! 🌟",
      "🎉 Here's to a wonderful Christmas and a happy new year! 🎉"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  console.log(randomMessage);
}

merryChristmasMessage();
