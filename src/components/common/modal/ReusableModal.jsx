import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ModalOverlay,
} from '@chakra-ui/react';

const ReusableModal = ({ isOpen, onClose, title, children, footer, width, height, overlay }) => {
    const defaultOverlay = (
        <ModalOverlay
            bg="blackAlpha.600"
            backdropFilter="blur(10px)"
        />
    );

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            {overlay || defaultOverlay}
            <ModalContent
                sx={{
                    width: `${width} !important`,
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
