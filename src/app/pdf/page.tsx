"use client";

import PDFFile from "@/components/PDF";
import {
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer/lib/react-pdf.browser.es.js";
import ReactPDF from "@react-pdf/renderer/lib/react-pdf.browser.es.js";

const Page = () => {
  return (
    <div className="h-[110vh] px-10 pt-6">
      {/* <PDFDownloadLink document={<PDFFile/>} fileName="Invitation">Download Invitation </PDFDownloadLink>
            <PDFViewer className="w-full h-screen">
                <PDFFile/>
            </PDFViewer> */}
    </div>
  );
};
export default Page;
