#  Fixed Width + Remaining Width Layout

##  Concept
- One box has a **fixed width** (e.g., sidebar).
- The other box **automatically takes up the remaining width** (e.g., main content).
- Use **Flexbox** for this layout.

---

##  Plain CSS Example
```jsx
<div style={{ display: "flex", height: "100vh" }}>
  {/* Fixed width box */}
  <div style={{ width: "250px", background: "lightgray" }}>
    Sidebar
  </div>

  {/* Flexible box (fills rest) */}
  <div style={{ flex: 1, background: "white" }}>
    Main Content
  </div>
</div>
```
#  HTML `<nav>` Element

##  What is `<nav>`?
- `<nav>` is an **HTML5 semantic element**.
- It represents a **section of navigation links**.
- Commonly used in **headers, sidebars, and menus**.
- Helps with **SEO** and **accessibility** (screen readers know it’s navigation).

---

##  Basic Example
```html
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>
