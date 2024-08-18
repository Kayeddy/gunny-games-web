import {
  disableLenis,
  enableLenis,
} from "@/components/custom/CustomLandingNavigationEventHandler";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect } from "react";

interface ComponentProps {
  modalTrigger: React.ReactNode;
  title: string;
  content: React.ReactNode;
  customSize?:
    | "lg"
    | "sm"
    | "md"
    | "xs"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full"
    | undefined;
}

export default function FaqsInformationModal({
  title,
  content,
  modalTrigger,
  customSize = "lg",
}: ComponentProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (isOpen) {
      disableLenis();
    } else {
      enableLenis();
    }
  }, [isOpen]);

  return (
    <>
      <Button onPress={onOpen} size="sm">
        {modalTrigger}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-[#1D1B26] max-h-[600px]"
        scrollBehavior="inside"
        hideCloseButton
        size={customSize}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className="text-[30px] leading-[40px] bg-clip-text bg-fuzzy-title">
                  {title}
                </h1>
              </ModalHeader>
              <ModalBody>
                <div>{content}</div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
