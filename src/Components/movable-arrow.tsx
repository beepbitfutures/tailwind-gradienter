import { motion, useDragControls } from 'framer-motion';
import styled from 'styled-components';
import ArrowSVG from './box-arrow-component.tsx';

function MovableArrow() {
  const controls = useDragControls();

  function startDrag(event) {
    controls.start(event);
  }

  const Arrow = styled(motion.div)`
    height: 8px;
    width: 8px;
    background-color: black;
    cursor: grab;
  `;

  return (
    <>
      <div onPointerDown={startDrag} />
      <Arrow
        drag="x"
        dragElastic={0}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2, cursor: 'grabbing' }}
        dragConstraints={{ top: 0, right: 400, left: -5 }}
      >
        <ArrowSVG />
      </Arrow>
    </>
  );
}

export default MovableArrow;
