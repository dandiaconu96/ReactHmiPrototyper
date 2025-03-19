import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import styled from "styled-components";
import {
  Home,
  FlightTakeoff,
  People,
  Umbrella,
  Flag,
  Settings,
} from "@mui/icons-material";
import { Typography } from "@mui/material";

/** Example data with MUI icons */
const items = [
  { icon: <Home fontSize="large" />, label: "Dummy 1\nSecond Line" },
  { icon: <FlightTakeoff fontSize="large" />, label: "Dummy 2" },
  { icon: <People fontSize="large" />, label: "Dummy 3" },
  { icon: <Umbrella fontSize="large" />, label: "Dummy 4\nSecond Line" },
  { icon: <Flag fontSize="large" />, label: "Dummy 5" },
  { icon: <Settings fontSize="large" />, label: "Dummy 6\nSecond Line" },
  { icon: <Home fontSize="large" />, label: "Dummy 7" },
  { icon: <People fontSize="large" />, label: "Dummy 8\nSecond Line" },
];

const PARTIAL_ITEMS = 4.5;
const ITEM_WIDTH = 300; // Enough width for each item
const SPACING = 16; // Gap between items
const CONTAINER_WIDTH = PARTIAL_ITEMS * (ITEM_WIDTH + SPACING);

const Container = styled.div`
  width: ${CONTAINER_WIDTH}px; /* ~1422px for 4.5 items */
  overflow: hidden;
  border: 1px solid #999;
  border-radius: 4px;
  position: relative;
  height: 200px;
`;

const Inner = styled(animated.div)`
  display: flex;
  flex-wrap: nowrap; /* <-- Prevents wrapping so items beyond container are hidden */
  align-items: flex-start;
  user-select: none;
  cursor: grab;
  padding: 8px;
`;

interface ItemWrapperProps {
  selected?: boolean;
}

const ItemWrapper = styled.div<ItemWrapperProps>`
  width: ${ITEM_WIDTH}px;
  margin-right: ${SPACING}px;
  color: inherit;
  position: relative;

  /* Enough height so icon + up to 2 lines of text remain top-aligned */
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
  box-sizing: border-box;

  /* Orange bottom border if selected */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: ${(p) =>
      p.selected ? p.theme.colors.primary : "transparent"};
  }
`;

const IconContainer = styled.div`
  margin-bottom: 4px;
`;

interface ProgramCarouselProps {
  onItemClick?: (index: number) => void;
}

const ProgramCarousel: React.FC<ProgramCarouselProps> = ({ onItemClick }) => {
  const length = items.length;
  const totalWidth = length * (ITEM_WIDTH + SPACING);
  const maxOffset = -(totalWidth - CONTAINER_WIDTH);

  const [springs, api] = useSprings(1, () => ({ x: 0 }));
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const bind = useDrag(({ offset: [dx], active }) => {
    let newX = dx;
    // Rubberband effect at edges
    if (newX > 0) {
      newX /= 2;
    } else if (newX < maxOffset) {
      newX = maxOffset + (dx - maxOffset) / 2;
    }

    if (!active) {
      // Snap to nearest item
      const snapWidth = ITEM_WIDTH + SPACING;
      const rawIndex = -newX / snapWidth;
      const closestIndex = Math.round(rawIndex);
      const snappedX = -closestIndex * snapWidth;
      const finalX = Math.max(Math.min(snappedX, 0), maxOffset);
      api.start({ x: finalX, immediate: false });
    } else {
      api.start({ x: newX, immediate: true });
    }
  });

  const handleItemClick = (idx: number) => {
    setSelectedIndex(idx);
    onItemClick?.(idx);
  };

  return (
    <Container>
      {springs.map(({ x }, springIndex) => (
        <Inner key={springIndex} {...bind()} style={{ x }}>
          {items.map((item, i) => {
            // For multi-line labels, split at newline
            const lines = item.label.split("\n");
            return (
              <ItemWrapper
                key={i}
                onClick={() => handleItemClick(i)}
                selected={i === selectedIndex}
              >
                <IconContainer>{item.icon}</IconContainer>
                {lines.map((line, idxLine) => (
                  <Typography
                    key={idxLine}
                    variant="body2"
                    sx={{
                      color: "inherit",
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    {line}
                  </Typography>
                ))}
              </ItemWrapper>
            );
          })}
        </Inner>
      ))}
    </Container>
  );
};

export default ProgramCarousel;
