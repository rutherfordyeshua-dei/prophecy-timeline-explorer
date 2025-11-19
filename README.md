# Prophecy Timeline Explorer

An interactive web application for exploring and comparing prophecy cycles across seven ancient traditions spanning over 4,000 years of history.

## Overview

The **Prophecy Timeline Explorer** is a research and visualization tool designed to help scholars, researchers, and enthusiasts understand the complex relationships between different prophetic traditions and their cycles. The application integrates data from Ethiopian, Qumran, Mayan, Aztec, Christian Primitive, Gnostic, and Historicist traditions.

## Features

### Interactive Timeline Visualization
- Explore major prophetic events from -2100 to 3285 A.D.
- Interactive zoom controls for detailed exploration
- Color-coded events by tradition
- Hover tooltips with event details
- Related prophecy cycle information

### Cycle Comparison Tools
- Compare duration and characteristics of cycles across traditions
- Interactive filters to select specific traditions
- Visual bar charts showing cycle durations
- Timeline range visualization
- Detailed comparison tables with statistics

### Prophetic Traditions Explorer
- In-depth information on eight distinct traditions
- Key texts and sources for each tradition
- Associated prophecy cycles with descriptions
- Significance and historical context
- References and citations

### 2025 Convergence Analysis
- Detailed breakdown of seven cycles converging in 2025
- Analysis of the 1,260-year prophecy (Historicist and Proposed interpretations)
- Personal timeline (Rey Capitan cycle: 1991-2025)
- Synthesis of multiple prophetic frameworks

### Comprehensive Research Data
- 10+ prophecy cycles from 8 distinct traditions
- 15+ major timeline events
- Detailed cycle descriptions and key prophecies
- Original source references
- Leader and significance information

## Prophecy Cycles Included

1. **Ethiopian Tradition** - Enoch's 70 Generations (4,125 years)
2. **Qumran Tradition** - Messianic Prophecy from Dead Sea Scrolls
3. **Christian Primitive** - Mary Magdalene Cycle (2,017 years)
4. **Jesus Resurrection** - 2,000-year cycle from Resurrection
5. **Historicist** - 1,260-year Papal dominance (538-1798 A.D.)
6. **Mayan** - Baktun IV and V cycles
7. **Aztec** - 52-year renewal cycles
8. **Personal** - Rey Capitan cycle (1991-2025)
9. **Futurist** - 1,260-day Great Tribulation period
10. **Proposed Synthesis** - 1,260-year Millennial Reign (2025-3285)

## Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom theme
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Build Tool**: Vite
- **Testing**: Vitest
- **Package Manager**: pnpm

## Getting Started

### Prerequisites
- Node.js 22.13.0 or higher
- pnpm package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/rutherfordyeshua-dei/prophecy-timeline-explorer.git
cd prophecy-timeline-explorer

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The application will be available at `http://localhost:3000`

### Building for Production

```bash
# Build the application
pnpm build

# Preview the production build
pnpm preview
```

## Project Structure

```
prophecy-timeline-explorer/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx           # Landing page with feature overview
│   │   │   ├── Timeline.tsx       # Interactive timeline visualization
│   │   │   ├── Comparison.tsx     # Cycle comparison tools
│   │   │   ├── Traditions.tsx     # Prophetic traditions explorer
│   │   │   └── About.tsx          # Research information and methodology
│   │   ├── lib/
│   │   │   └── prophecyData.ts    # Comprehensive prophecy cycle data
│   │   ├── components/            # Reusable UI components
│   │   ├── contexts/              # React contexts
│   │   ├── App.tsx                # Main application routes
│   │   └── main.tsx               # React entry point
│   └── public/                    # Static assets
├── server/                        # Backend placeholder
├── shared/                        # Shared types
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Pages

### Home
The landing page provides an overview of the application with feature cards and quick navigation to all major sections.

### Timeline
Interactive visualization of prophecy events across 4,000+ years with:
- Zoomable timeline axis
- Color-coded events by tradition
- Event details and related cycles
- Tradition legend

### Comparison
Compare prophecy cycles with:
- Interactive tradition filters
- Duration comparison charts
- Timeline range visualization
- Detailed comparison table
- Statistics (count, longest, average)

### Traditions
Explore each prophetic tradition in depth:
- Tradition overview and origin
- Key texts and sources
- Associated prophecy cycles
- Significance and impact
- References and citations

### About
Comprehensive research information including:
- 2025 Convergence analysis
- Prophetic traditions overview
- Research methodology
- Primary sources
- Important disclaimers

## Data Structure

The application uses a comprehensive TypeScript data structure:

```typescript
interface ProphecyCycle {
  id: string;
  name: string;
  tradition: string;
  startYear: number;
  endYear: number;
  duration: number;
  description: string;
  keyProphecy: string;
  leader: string;
  source: string;
  references: string[];
}

interface Tradition {
  id: string;
  name: string;
  origin: string;
  description: string;
  cycles: ProphecyCycle[];
  keyTexts: string[];
  significance: string;
}
```

## Key Prophecy Interpretations

### The 1,260-Year Prophecy
The application explores two major interpretations of Revelation 12:6:

1. **Historicist View** (538-1798 A.D.): The 1,260 days interpreted as 1,260 years using the day-for-a-year principle, representing the era of Papal dominance and Church persecution.

2. **Proposed Synthesis** (2025-3285 A.D.): A new interpretation suggesting the 1,260-year period represents Christ's Millennial Reign beginning in 2025.

### The 2025 Convergence
Seven distinct prophetic cycles culminate in 2025:
- Mary Magdalene cycle (2,017 years)
- Jesus Resurrection cycle (1,992 years)
- Enoch's prophecy (4,125 years)
- Mayan Baktun IV completion + 13 years
- Aztec 52-year cycles (10 cycles)
- And more...

## Design Philosophy

The application uses a **dark theme with amber accents** to create a scholarly, professional atmosphere suitable for research and contemplation. The design emphasizes:

- **Clarity**: Clear navigation and information hierarchy
- **Accessibility**: High contrast, readable typography
- **Interactivity**: Responsive filters and zoom controls
- **Responsiveness**: Mobile-friendly design across all pages

## Testing

The project includes comprehensive unit tests for the prophecy data structure:

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```

## Research Methodology

This application integrates multiple prophetic traditions using:

1. **Comparative Analysis**: Identifying patterns across different traditions
2. **Day-for-a-Year Principle**: Interpreting prophetic time periods
3. **Cycle Correlation**: Finding convergence points across traditions
4. **Historical Verification**: Aligning prophecies with recorded history
5. **Synthesis Integration**: Combining personal timelines with broader cycles

## Primary Sources

- **Biblical & Religious**: Book of Enoch, Dead Sea Scrolls, Nag Hammadi Library, Gospel of Mary Magdalene
- **Mesoamerican**: Popol Vuh, Codex Borbónico, Dresden Codex
- **Academic**: Adventist Biblical Research, scholarly interpretations of prophecy
- **Prophetic Traditions**: Historicist, Futurist, Preterist, and Idealist views

## Important Disclaimer

This research tool is designed for **educational and exploratory purposes**. The interpretations and correlations presented represent one perspective on prophetic cycles and should be considered alongside other scholarly and theological viewpoints. Users are encouraged to conduct their own research and form their own conclusions.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests with:
- Additional prophecy cycles or traditions
- Improved visualizations
- Enhanced documentation
- Bug fixes or performance improvements

## License

This project is open source and available under the MIT License.

## Author

Created as a comprehensive research tool for exploring prophetic cycles and their convergence in 2025.

## Support & Feedback

For questions, suggestions, or feedback about the Prophecy Timeline Explorer, please open an issue on the GitHub repository.

---

**Repository**: [github.com/rutherfordyeshua-dei/prophecy-timeline-explorer](https://github.com/rutherfordyeshua-dei/prophecy-timeline-explorer)

**Live Demo**: Available through the Manus platform

**Last Updated**: November 2025
