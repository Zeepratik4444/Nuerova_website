---
name: Proton Modern
colors:
  surface: '#f9f9ff'
  surface-dim: '#d7dae3'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3fc'
  surface-container: '#ebedf7'
  surface-container-high: '#e6e8f1'
  surface-container-highest: '#e0e2eb'
  on-surface: '#181c22'
  on-surface-variant: '#414753'
  inverse-surface: '#2d3037'
  inverse-on-surface: '#eef0fa'
  outline: '#717785'
  outline-variant: '#c1c6d5'
  surface-tint: '#005db8'
  primary: '#005cb8'
  on-primary: '#ffffff'
  primary-container: '#1275e2'
  on-primary-container: '#000512'
  inverse-primary: '#aac7ff'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#dee0e3'
  on-secondary-container: '#606365'
  tertiary: '#9a4600'
  on-tertiary: '#ffffff'
  tertiary-container: '#c05900'
  on-tertiary-container: '#0d0300'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aac7ff'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#00458d'
  secondary-fixed: '#e1e2e5'
  secondary-fixed-dim: '#c5c6c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#44474a'
  tertiary-fixed: '#ffdbc9'
  tertiary-fixed-dim: '#ffb68c'
  on-tertiary-fixed: '#321200'
  on-tertiary-fixed-variant: '#763400'
  background: '#f9f9ff'
  on-background: '#181c22'
  surface-variant: '#e0e2eb'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
---

# Design System: Proton Modern

## Brand & Style
The brand identity has shifted from a warm, industrial orange to a crisp, professional, and trustworthy blue aesthetic. The personality is "Corporate Modern"—reliable, balanced, and highly professional. It draws inspiration from modern interface guidelines, emphasizing clarity, efficiency, and a calm user experience. The target audience includes enterprise users and professionals who require a focused environment that reduces cognitive load through familiar patterns and a cooling color palette.

## Colors
The palette is anchored by a vibrant Primary Blue (#1275e2), signaling action and reliability. The Secondary palette has been updated to a very light, cool grey-white (#f6f7fa) to handle supportive UI elements and provide subtle surface differentiation without competing for attention. Tertiary accents introduce a warm contrast with a deep amber/orange (#c55b00), reserved strictly for highlighting critical information or secondary calls to action. The Neutral palette is a balanced grey (#74777f) that ensures high legibility and clean structural separation in a light mode environment.

## Typography
The system utilizes **Inter** across all levels to provide a highly legible, neutral, and modern typographic feel. This replaces the previous geometric sans with a variable font optimized for screen readability. 

- **Headlines:** Semi-bold Inter, ranging from 24px to 32px, establishing a clear hierarchy.
- **Body:** Standard Inter at 14px-16px with a comfortable 1.5x line-height ratio.
- **Labels:** Inter Medium at 12px for UI metadata and form labels.

## Layout & Spacing
The layout follows a fluid 8px grid system. The spacing rhythm is predictable:
- **Small (8px):** Internal element spacing.
- **Medium (16px):** Standard component padding and gutters.
- **Large (24px+):** Section margins and layout separation.

The design adapts to different screen sizes by maintaining fixed gutters of 16px on mobile and 24px on desktop, while content containers expand fluidly.

## Elevation & Depth
Depth is conveyed through tonal layers and soft ambient shadows. Surfaces use subtle background color shifts to indicate nesting, often utilizing the light secondary grey (#f6f7fa) for layered containers. Elevated elements like cards or menus utilize diffused shadows with a low-opacity neutral tint to appear as if floating slightly above the base surface.

## Shapes
The shape language uses a **Soft** approach. 
- **Standard elements:** 0.25rem (4px) corner radius.
- **Large containers (Cards):** 0.5rem (8px) corner radius.
- **Extra-large elements:** 0.75rem (12px) corner radius.

This subtle rounding softens the professional tone, making the interface feel more approachable and modern.

## Components
- **Buttons:** Primary buttons use the Primary Blue (#1275e2) with white text and 4px rounded corners.
- **Inputs:** Feature a neutral grey border that transitions to the primary blue on focus, using Inter at 14px for user entry.
- **Cards:** Utilize a white background with a soft shadow and 8px corners.
- **Chips:** Small, 4px rounded containers utilizing the light secondary grey-white palette (#f6f7fa).
- **Checkboxes:** Square with a slight 2px radius, filling with the primary blue when selected.