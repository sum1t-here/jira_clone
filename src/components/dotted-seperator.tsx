import { cn } from "@/lib/utils"; // Utility function for combining class names

// Define the properties the component accepts
interface DottedSeperatorProps {
  classname?: string;
  color?: string;
  height?: string; // Optional height of the separator line, defaults to "2px"
  dotSize?: string; // Optional size of the dots, defaults to "2px"
  gapSize?: string; // Optional gap between the dots, defaults to "6px"
  direction?: "horizontal" | "vertical"; // Direction of the separator, either horizontal or vertical
}

// Functional component definition
export function DottedSeperator({
  classname, // custom class passed as prop
  color = "#d4d4d8",
  height = "2px",
  dotSize = "2px",
  gapSize = "6px",
  direction = "horizontal",
}: DottedSeperatorProps) {
  // Determine if the separator is horizontal (true) or vertical (false)
  const isHorizontal = direction === "horizontal";

  return (
    <div
      // Combine dynamic and custom classes using the `cn` function
      // If `direction` is horizontal, apply flex for horizontal layout, otherwise vertical
      className={cn(
        isHorizontal
          ? "w-full flex items-center" // Full width if horizontal
          : "h-full flex flex-col items-center", // Full height if vertical
        classname // Any additional class passed as a prop is added here
      )}
    >
      <div
        className={isHorizontal ? "flex-grow" : "flex-grow-0"} // Flex-grow allows the line to take available space in the layout
        style={{
          // Dynamically set width and height based on direction
          width: isHorizontal ? "100%" : height, // Full width for horizontal separator
          height: isHorizontal ? height : "100%", // Full height for vertical separator

          // Create the dotted pattern using CSS radial-gradient
          backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,

          // Set the size of each dot and the gaps between them
          backgroundSize: isHorizontal
            ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}` // Dot size and gap for horizontal
            : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`, // Dot size and gap for vertical

          backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y", // Repeat dots horizontally or vertically based on direction
          backgroundPosition: "center", // Center the dots in the line
        }}
      />
    </div>
  );
}
