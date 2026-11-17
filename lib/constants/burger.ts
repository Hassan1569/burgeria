export const INGREDIENTS = [
  { id: "patty", name: "Beef Patty", zIndex: 20, color: "#4A2C1B" },
  { id: "cheese", name: "Melted Cheese", zIndex: 30, color: "#F4C430" },
  { id: "sauce", name: "Signature Sauce", zIndex: 40, color: "#E8A359" },
  { id: "tomato", name: "Tomato Slices", zIndex: 50, color: "#D32F2F" },
  { id: "lettuce", name: "Fresh Lettuce", zIndex: 60, color: "#5B8C3E" },
  { id: "top-bun", name: "Top Sesame Bun", zIndex: 70, color: "#D98E48" },
  { id: "bottom-bun", name: "Bottom Bun", zIndex: 10, color: "#C97B3D" },
] as const;

export type IngredientId = typeof INGREDIENTS[number]["id"];