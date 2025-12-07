# 🎡 Spin and Win Reward

<div align="center">

![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

An interactive **spinning wheel reward system** built with vanilla HTML5, CSS3, and JavaScript. Perfect for games, loyalty programs, contests, and promotional campaigns.

[Live Demo](#features) • [Quick Start](#quick-start) • [Features](#features) • [Customization](#customization)

</div>

---

## ✨ Features

- 🎨 **Beautiful Animated Wheel** - Smooth 3D-like canvas-based spinning animation
- 🎯 **Random Rewards** - 8 configurable reward options with emojis and colors
- ⚡ **Fast & Lightweight** - No dependencies, pure vanilla JavaScript
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile devices
- ✋ **Touch Support** - Swipe gestures on mobile devices to spin
- 🎵 **Modern UI** - Gradient backgrounds, smooth transitions, and animations
- 🔧 **Easy to Customize** - Modify rewards, colors, and animations easily
- ♿ **Accessible** - Semantic HTML and keyboard-friendly interface

---

## 🚀 Quick Start

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HemantJimin/spin-and-win-reward.git
cd spin-and-win-reward
```

2. Open in browser:
```bash
# Simply open index.html in your web browser
open index.html  # macOS
# or
start index.html  # Windows
```

### No Build Required!
This project uses vanilla JavaScript - no npm, webpack, or build tools needed. Just open the HTML file and play!

---

## 📁 Project Structure

```
spin-and-win-reward/
├── index.html      # Main HTML file with canvas element
├── style.css       # Styling and animations
├── script.js       # Game logic and wheel rendering
└── README.md       # This file
```

---

## 🎮 How It Works

1. **Click the "SPIN TO WIN" button** - The wheel starts rotating with a smooth easing animation
2. **Random Selection** - The wheel makes 5-10 random rotations and stops at a random position
3. **Result Display** - The winning reward is displayed with an emoji and celebration message
4. **Spin Again** - Click the button again to play another round

### The Wheel
- 8 reward segments with different colors and emojis
- Canvas-based rendering for smooth performance
- Pointer at the top indicates the winning segment
- Center circle shows the focal point

---

## 🎨 Customization

### Modify Rewards

Edit the `rewards` array in `script.js`:

```javascript
const rewards = [
    { label: '20% OFF', color: '#FF6B6B', emoji: '🎉' },
    { label: 'FREE ITEM', color: '#4ECDC4', emoji: '🎁' },
    { label: '50% OFF', color: '#45B7D1', emoji: '🌟' },
    // Add more rewards...
];
```

### Change Animation Speed

Find this line in `script.js` and adjust the duration (in milliseconds):

```javascript
const duration = 4000; // Change to 3000 for faster spin, 5000 for slower
```

### Modify Colors and Styling

Edit `style.css` to change:
- Background gradient
- Button colors
- Text styles
- Animation effects

### Add More Segments

Simply add more objects to the `rewards` array - the wheel will automatically adjust to display all segments!

---

## 💻 Technologies Used

- **HTML5** - Canvas API for wheel rendering
- **CSS3** - Gradients, animations, and responsive design
- **JavaScript (ES6+)** - Game logic and interactions
- **Git & GitHub** - Version control

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎯 Use Cases

1. **E-commerce** - Customer loyalty rewards programs
2. **Gaming** - Daily spin bonus systems
3. **Marketing** - Promotional campaigns and contests
4. **Education** - Gamified learning platforms
5. **Entertainment** - Interactive web games

---

## 🔮 Future Enhancements

- [ ] Sound effects for spinning and winning
- [ ] Leaderboard system
- [ ] Backend integration for tracking spins
- [ ] Multiple difficulty levels
- [ ] Social sharing features
- [ ] Weighted probability system
- [ ] Theme presets (dark mode, custom colors)
- [ ] Spinnable with keyboard arrow keys

---

## 📄 License

This project is licensed under the **MIT License** - feel free to use it in your projects!

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork this repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📧 Contact & Support

- **Author**: Hemant Jimin
- **GitHub**: [@HemantJimin](https://github.com/HemantJimin)
- **Email**: For support, open an issue in the repository

---

<div align="center">

⭐ If you find this project useful, please consider giving it a star!

**Happy Spinning! 🎡✨**

</div>

#hemantjimin

