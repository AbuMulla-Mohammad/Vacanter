import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ModalOverlay,
} from '@chakra-ui/react';

const ReusableModal = ({ isOpen, onClose, title, children, footer, width, height, overlay, size, closeOnOverlayClick = true }) => {
    const defaultOverlay = (
        <ModalOverlay
            bg="blackAlpha.600"
            backdropFilter="blur(10px)"
        />
    );

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={size} closeOnOverlayClick={closeOnOverlayClick}>
            {overlay || defaultOverlay}
            <ModalContent
                sx={{

                    height: `${height} !important`,
                }}
            >
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody overflow="auto">{children}</ModalBody>
                {footer && <ModalFooter>{footer}</ModalFooter>}
            </ModalContent>
        </Modal>
    );
};

export default ReusableModal;
