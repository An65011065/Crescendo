# Crescendo Journey - Asset Documentation

This document catalogs all visual assets and technical information for the Crescendo journey showcase website.

---

## **Founders Folder** (`/crescendoJourney/founders`)

### **1.jpg** - Development Session (Top-down Library Shot)

-   **Scene:** 3 team members in library/study space
-   **Key Elements:**
    -   Developer working on laptop with code visible on screen
    -   Creative overhead angle showing workspace
    -   Casual collaborative work environment
    -   Books and study materials visible in background
-   **Usage:** Behind-the-scenes development work, team collaboration story

### **2.jpg** - Project Poster Presentation (Solo)

-   **Scene:** Single team member presenting research poster
-   **Key Elements:**
    -   Large academic poster board showing Crescendo
    -   UI mockups and system architecture diagrams visible
    -   Academic/conference presentation setting
    -   Printer visible in background
-   **Usage:** Academic presentation context, technical depth showcase

### **3.jpg** - Team Photo with Poster (Formal)

-   **Scene:** 3 founders standing formally in front of research poster
-   **Key Elements:**
    -   Red wall background - professional academic setting
    -   Full poster visible: "CRESCENDO: The Geosocial Music Platform"
    -   Shows app UI screens, architecture diagrams, and technical details
    -   Team dressed semi-formally
-   **Usage:** Official team photo, academic showcase moment

### **4.jpg** - Team Photo (Casual Indoor)

-   **Scene:** 3 founders standing together in hallway/indoor space
-   **Key Elements:**
    -   Casual posture and setting
    -   Natural lighting from windows
    -   More relaxed than formal poster shot
-   **Usage:** Team personality, casual working relationship

### **5.jpg** - Waterfront Team Photo (Lifestyle)

-   **Scene:** 3 founders outdoors at marina/waterfront
-   **Key Elements:**
    -   Rainbow visible in dramatic cloudy sky
    -   Boats and water in background
    -   Most casual/lifestyle-oriented shot
    -   Natural outdoor setting
-   **Usage:** Journey conclusion, team bonding, life beyond code

### **IMG_5104.jpg** - Poster Layout Session

-   **Scene:** Top-down shot of team member arranging full poster
-   **Key Elements:**
    -   Complete poster spread visible with all sections
    -   Red table surface
    -   Working session in progress
    -   Laptop visible - active design/layout work
-   **Usage:** Design process, attention to detail in presentation

---

## **Resources Folder** (`/crescendoJourney/resources`)

### **1.png** - Main Map Screen Mockup

-   **Screen:** Primary map interface
-   **Key Elements:**
    -   Clean 3D device mockup on beige/tan hand
    -   San Francisco map view with blue water rendering
    -   "Nearby Listeners" section at bottom with user avatars (Ayman Khan, Hedavam Solano, Mike)
    -   Orange accent markers on map indicating listening activity
    -   Bottom navigation bar: Maps, Discover, Notifications, Profile
    -   Search bar at top
    -   Time showing 5:46
-   **Usage:** Hero product shot, main feature demonstration

### **2.png** - User Profile Card on Map

-   **Screen:** User interaction modal
-   **Key Elements:**
    -   User profile card for "Shaq" overlaid on map
    -   "Currently LISTENING TO" status
    -   Song: "Cruel Summer"
    -   Orange "Add as Friend" CTA button
    -   Map background showing San Francisco
    -   My Location pin visible
-   **Usage:** Social feature showcase, user interaction flow

### **3.png** - Discover Screen

-   **Screen:** Content discovery interface
-   **Key Elements:**
    -   Featured "Echo Session" at top (join 23 others listening to hip-hop)
    -   "Hits from the Week" section with album artwork (Midwest City, Blinding Lights, Levitating)
    -   "Friendly Faces + Friends" section showing social connections
    -   Clean white background design
    -   Bottom navigation visible
    -   Red "Join Session" button
-   **Usage:** Secondary feature showcase, music discovery functionality

### **4.png** - Notifications Panel

-   **Screen:** Notification overlay on map
-   **Key Elements:**
    -   Sliding notification panel from top
    -   Friend requests from "John Doe" and "Jane Smith" with timestamps
    -   Green accept / orange decline buttons
    -   "Nearby Listeners" section below (Ayman Khan, Hedavam Solano, Mike)
    -   San Francisco map in background
    -   My Location marker visible
-   **Usage:** Social notifications, real-time interaction features

### **crescendo-poster.png** - Academic Research Poster

-   **Type:** Full technical/academic poster
-   **Key Sections:**
    -   **Header:** CRESCENDO logo, QR codes, team info, institution
    -   **Introduction:** "Music is all around you - We've just put it on the map"
    -   **System Design:** Architecture flowchart (Expo, Supabase, React Native, Mapbox)
    -   **Center:** 3 phone mockups showing key screens
    -   **Database Schema:** ER diagram with tables and relationships
    -   **Features in Development:** Bullet list of upcoming features
    -   **Key Features:** Core functionality breakdown
    -   **Initial Statement:** Vision and goals
-   **Team:** Anweshan Adhikari '25, Ayman Khan '25, Hedavam Solano '25
-   **Course:** CS 701 - Spring 2025
-   **Institution:** Middlebury College
-   **Colors:** Beige/cream background, orange accents
-   **Usage:** Technical deep-dive, complete system overview

### **animation.mp4** & **crescendo-demo.mp4**

-   Video assets for interactive storytelling
-   Demo walkthrough of app functionality

---

## **Crescendo Repository Overview** (`/crescendo`)

### **Tech Stack**

**Frontend:**

-   React Native 0.79.2
-   Expo ~53.0.0
-   TypeScript + JSX
-   React Navigation (Bottom Tabs, Material Top Tabs, Native Stack)

**Mapping:**

-   @rnmapbox/maps (primary)
-   react-native-maps
-   expo-location for geolocation

**Authentication & Backend:**

-   Supabase (@supabase/supabase-js)
-   Spotify OAuth (expo-auth-session, spotify-web-api-node)
-   PostgreSQL (pg)
-   Express server

**Key Libraries:**

-   expo-av for audio playback
-   react-native-video for video content
-   axios for API calls
-   expo-secure-store for token storage

### **Core Features Implemented**

1. **Map View** (`frontend/src/components/mapView/`)

    - Real-time geolocation-based music activity
    - User markers showing current listening activity
    - Interactive map with clusters
    - Search functionality
    - Settings and privacy controls

2. **User Tracking System** (`frontend/src/hooks/useUserTracking.ts`)

    - Live Spotify playback tracking
    - Location-based activity broadcasting
    - Privacy controls for visibility

3. **Discover Screen** (`frontend/src/components/discover/`)

    - Echo Sessions (group listening experiences)
    - Weekly music trends
    - Social connections and friend suggestions

4. **Social Features**

    - Messages/notifications system
    - User profiles with music preferences
    - Friend requests and connections
    - Notification panel

5. **Authentication Flow**
    - Spotify OAuth integration
    - Onboarding experience
    - Splash screen and video animation intro

### **Product Vision** (Refined)

**Core Concept:**
Crescendo reveals the sonic landscape around you. It's a real-time music demographic map that shows what people in your vicinity are listening to right now. Discover the musical identity of neighborhoods, cafes, gyms, and campuses.

**Primary Use Case:**

-   See what songs are playing around you in real-time
-   Understand the music demographic/culture of physical spaces
-   Discover music through geography rather than algorithms
-   Connect with nearby listeners who share your taste

**Key Differentiator:**
Rather than algorithmic recommendations, Crescendo maps music to physical space. It answers questions like:

-   "What kind of music do people in this neighborhood listen to?"
-   "What's the vibe of this coffee shop?"
-   "Who around me is listening to the same artist?"

**Secondary Features:**

-   Echo Sessions: Group listening experiences (local/global)
-   Social connections based on proximity and music taste
-   Music discovery through real-world exploration
-   Privacy controls for anonymous listening

**Technical Achievement:**

-   Real-time geospatial data visualization
-   Spotify API integration with live playback tracking
-   Scalable location-based clustering
-   Privacy-first design with granular controls

### **Project Structure**

```
crescendo/
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── mapView/        # Core map interface
│       │   ├── discover/       # Discovery features
│       │   ├── messages/       # Social messaging
│       │   ├── intro/          # Onboarding
│       │   └── auth/           # Authentication
│       ├── services/           # API integrations
│       ├── hooks/              # Custom React hooks
│       └── navigation/         # App navigation
├── backend/                    # Express + Supabase logic
├── android/                    # Android native code
├── ios/                        # iOS native code
└── supabase/                   # Database schemas
```

---

## **Storytelling Assets Summary**

### **Available for Journey Narrative:**

1. ✅ Team formation photos (casual to formal)
2. ✅ Development/working session images
3. ✅ Academic presentation materials (poster)
4. ✅ High-quality product mockups (4 screens)
5. ✅ Complete technical documentation (poster)
6. ✅ Video demos (animation + full demo)
7. ✅ Lifestyle/celebration photos (waterfront)

### **Narrative Arc Potential:**

1. **Origin** → Casual team photo, initial brainstorming
2. **Development** → Library study sessions, code on laptops
3. **Building** → Poster creation process (IMG_5104)
4. **Product** → Clean mockups of final app (1-4.png)
5. **Presentation** → Academic poster showcase (3.jpg)
6. **Technical Depth** → Full poster breakdown
7. **Celebration** → Waterfront team photo

---

## **Design System Notes for Dutch Style**

**Colors Present in Assets:**

-   Orange (primary accent) - #FF6B35 approximately
-   Blue (water/map) - Sky/ocean blues
-   Beige/Cream (poster background)
-   Red (presentation wall)
-   White (app UI background)

**Typography Visible:**

-   Clean sans-serif in app UI
-   Academic poster uses mixed hierarchy

**Suggested Dutch Design Approach:**

-   High contrast text blocks
-   Grid-based layout
-   Bold typography
-   Generous whitespace
-   Vibrant color blocking (orange, blue, black)
-   Asymmetric layouts
-   Functional, direct communication
