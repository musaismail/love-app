import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import "./pdf.css";

const Pdf = () => {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer/lib",
        initialDoc: "/files/PDFTRON_about.pdf",
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer, annotationManager, Annotations } = instance.Core;

      documentViewer.addEventListener("documentLoaded", () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          // values are in page coordinates with (0, 0) in the top left
          X: 100,
          Y: 150,
          Width: 200,
          Height: 50,
          Author: annotationManager.getCurrentUser(),
        });

        annotationManager.addAnnotation(rectangleAnnot);

        annotationManager.redrawAnnotation(rectangleAnnot);
      });
    });
  }, []);

  return (
    <div className="pdf w-full h-full">
      <div className="header text-center">Create Your LoveBook</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default Pdf;
