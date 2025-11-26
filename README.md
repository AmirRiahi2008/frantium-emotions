# frantium-emotions

Frantium hasn't been feeling like himself lately. He studies, works, and even tries to have fun, but the thoughts spinning in his head and his sense of being lost have left him feeling numb.  
The only thing keeping him going is work — and thanks to his creative mind, he decided to visualize his chaotic thoughts using emojis and colors.

---

## 📁 Starter Project
Download link was provided in the assignment instructions.

---

## 🧱 Goal
Recreate the layout so that the final result visually matches the reference image included in the assignment.

---

## 🧩 Container and Rows

### Container Requirement
All rows must be created inside the element with class: .container
### Number of Rows
There must be exactly **4 rows**.

### Icon Count Requirement
The layout must contain **exactly 10 icons total**.  
If the icon count is incorrect, the submission receives **no score**.

---

## 🧩 Row Rules

### General Structure
- Each row must be inside a `<div>`
- Each row must have the class: .container_item
- ---

### Odd Rows (Row 1 and Row 3)
Must include:
- **Two `happy` icons only**

Additional class requirements:
- Row 1 → `row-blue`
- Row 3 → `row-red`
- Both odd rows must include: .two-icons
- ---

### Even Rows (Row 2 and Row 4)
Must include **three icons in this exact order (from left):**
1. `happy`
2. `sad`
3. `angry`

Additional class requirements:
- Row 2 → `row-teal`
- Row 4 → `row-lightred`

---

## 🎨 Icon Usage Notes
- Each icon must be created using an `<img>` tag
- `src` paths must point to images found inside the `icons` folder

Example structure:
./icons/happy.png
./icons/sad.png
./icons/angry.png
---

## 📤 Submission Instructions

If everything is implemented correctly but the result does not display as expected, you may need to:
- adjust the `<script>` tag in `index.html`, or
- use a JavaScript event in `index.js`

You are allowed to make changes to:
index.html
index.js
