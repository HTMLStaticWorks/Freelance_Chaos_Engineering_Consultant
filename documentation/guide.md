# Documentation Guide

## Theme Customization
All colors are managed via CSS variables in `assets/css/style.css`.
- `--primary-color`: Used for headers, footers, and main headings.
- `--secondary-color`: Used for accents, buttons, and active states.
- `--accent-color`: Used for warnings and "chaos" themed elements.

## Adding New Sections
Each section should follow the structure:
```html
<section class="section">
    <div class="container">
        <div class="section-header text-center">
            <h2>Section Title</h2>
            <p>Subtext goes here.</p>
        </div>
        <div class="grid">
            <!-- Content -->
        </div>
    </div>
</section>
```

## Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `1024px - 1439px`
- Large Desktop: `> 1440px`

## Dashboard Components
The dashboard uses a fixed sidebar on desktop. To add menu items, modify the `aside.sidebar` element in `pages/dashboard.html`.
