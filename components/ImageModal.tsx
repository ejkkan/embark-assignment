import * as React from "react";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { Box } from "@mui/system";

interface ImageModalProps {
  image: any;
  onClick: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClick }) => {
  return (
    <Box onClick={onClick}>
      <Modal open={!!image}>
        <Box display="flex" justifyContent="center">
          <Image
            src={image}
            alt="Picture of the author"
            quality={100}
            width={1000}
            height={450}
            objectFit="contain"
          />
        </Box>
      </Modal>
    </Box>
  );
};
export default ImageModal;
