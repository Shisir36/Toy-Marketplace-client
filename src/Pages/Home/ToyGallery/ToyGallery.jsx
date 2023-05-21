
import { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import { photos } from "./Photos";
import image from "../../../assets/ctg-pic/separator-img.png"
const ToyGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    }, []);

    return (
        <div className="mt-10">
            <div className=" mb-7">
                <h1 className="text-center font-bold md:text-5xl text-3xl gFont bg-gradient-to-r from-black via-gray-600 to-slate-300 text-transparent bg-clip-text md:p-5">
                    Toys Pictures
                </h1>
                <img src={image} alt="" className="mx-auto " />
            </div>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen && (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map((photo) => ({
                                ...photo,
                                srcset: photo.srcSet,
                                caption: photo.title,
                            }))}
                        />
                    </Modal>
                )}
            </ModalGateway>
        </div>
    );
};

export default ToyGallery;