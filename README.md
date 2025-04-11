# Assignment Requirements :

Assignment: Next.js/React.js Candidate Test
Objective:
Evaluate the candidate's ability to design UI, integrate APIs, and manipulate the DOM
effectively using Next.js/React.js.
---
Problem Statement:

Create a Car Finder Web App using Next.js (or React.js if preferred) that allows users to:
1. ### Search for Cars based on filters like brand, price range, fuel type, and seating capacity.
2. ### View Car Details when clicked from the search results.
3. ### Add Cars to Wishlist (store wishlist items in Local Storage).
4. Fetch Data from an API (provided or any mock API).
5. Apply Real-Time UI Updates based on user interactions.
---
Requirements:
1. Frontend (UI & UX) -
  1. Create a responsive design using TailwindCSS/Material UI/Bootstrap.
  2. ### Implement a search bar and filters for brand, price range, and fuel type.
  3. ### Use pagination to show only 10 cars per page.
  4. ##### Provide a wishlist feature with an interactive UI
  5. Display car images, names, and key specifications in a grid/list format.

2. API Handling -
Use Next.js API routes (or mock API) to fetch cars.
### Display loading states and error handling.
### Implement search and filter logic using API parameters.
DOM Manipulation
### Add cars to the wishlist using Local Storage.
### Update the UI without page reloads when adding/removing from the wishlist.
Show live updates when filters or search queries change.
### Allow users to sort cars by price (low to high, high to low).
---
Bonus Features
Implement a dark mode toggle.
Add animations or transitions for UI components.
---
Technology Stack:
Next.js (Preferred) / React.js
State Management: useState, useEffect (Redux optional)
CSS Framework: TailwindCSS
Storage: LocalStorage for Wishlist

# Project Management 
Here’s a **broken-down task-by-task project management list** for your Car Finder Web App. Each task is structured so you can delegate it to AI tools or friends easily, one at a time.

---

## 🗂️ Project Management Task List

---

### **1. Project Setup**
- [O] Initialize a Next.js (or React + Vite) project.
- [O] Install TailwindCSS and configure it.
- [O] Setup basic routing (using `pages` in Next.js or React Router in React).
- [O] Create a mock API using `json-server` or Next.js API routes.
- [] Create a folder structure (`components`, `pages`, `utils`, etc.).

---

### **2. UI Layout and Responsiveness**
- [ ] Design a responsive layout with TailwindCSS (Header, Footer, Main Content).
- [ ] Add dark mode toggle (TailwindCSS dark mode support).
- [ ] Create reusable components (Button, Card, SearchBar, etc.).

---

### **3. Home Page**
- [ ] Build a **Search Bar** with debounce support.
- [ ] Add **Filter UI**:
  - Brand dropdown
  - Price range slider
  - Fuel type select
  - Seating capacity select
- [ ] Add **Sort dropdown** (price: low-to-high, high-to-low).
- [ ] Fetch and display **cars** in grid/list view (card format).
- [ ] Implement **pagination** (10 items per page).

---

### **4. Car Details Page**
- [ ] Route to a dynamic details page (`/cars/[id]`).
- [ ] Display car image, name, specifications, and description.

---

### **5. Wishlist Functionality**
- [ ] Create "Add to Wishlist" button with animation.
- [ ] Store wishlist in `localStorage`.
- [ ] Sync UI state with localStorage changes (useEffect).
- [ ] Create a **Wishlist Page** that displays saved cars.

---

### **6. API Integration**
- [ ] Connect to real or mock API.
- [ ] Implement query parameters for:
  - Brand
  - Price range
  - Fuel type
  - Seating capacity
  - Sorting
- [ ] Add **loading** and **error** UI states.
- [ ] Test live filter updates without page reload.

---

### **7. Bonus Features**
- [ ] Add **dark mode toggle** and store preference in `localStorage`.
- [ ] Use **Framer Motion** or Tailwind transitions for smooth animations.

---

### **8. Testing & Deployment**
- [ ] Test all user flows (search, filters, wishlist).
- [ ] Fix any UI/UX bugs or inconsistencies.
- [ ] Deploy using Vercel (Next.js) or Netlify (React).

---

Let me know if you'd like this in a Trello/Notion-style format or want a checklist with estimated durations and complexity for task delegation.