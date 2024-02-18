"use client";

import logoImage from "@/assets/images/logo.png";
import signature from "@/assets/images/signature.png";
import stamp from "@/assets/images/stamp.png";
import { PageData } from "@/types";
import { monthNames } from "@/utils/constants";
import { getPrefix } from "@/utils/functions";
import NunitoMedium from "@/assets/font/NunitoSans_7pt_Condensed-Medium.ttf";
import NunitoBold from "@/assets/font/NunitoSans_7pt_Condensed-Bold.ttf";
import {
  Page,
  View,
  Text,
  Image,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer/lib/react-pdf.browser.es.js";
import { createTw } from "react-pdf-tailwind";
import { Font } from "@react-pdf/renderer";
import { base_url } from "@/utils/constants";

Font.register({
  family: "NunitoMedium",
  src: NunitoMedium,
});
Font.register({
  family: "NunitoBold",
  src: NunitoBold,
});

const tw = createTw({
  theme: {
    extend: {
      colors: {
        custom: "#692014",
        red: "#FF0000",
        gray: "#ccc",
        rightBorder:"#942836"
      },
      fontWeight: {
        bold: "bold",
        normal: "normal",
        light: "300",
        medium: "500",
        semibold: "600",
      },
    },
  },
});

const styles = StyleSheet.create({
  bold: {
    fontWeight: "extrabold",
    fontSize: "12px",
    marginTop: "20px",
  },
  pageStyles: {
    position: "relative",
  },
  waterMarkContainer: {
    position: "absolute",
    top: "52%",
    left: "4%",
    width: "79%",
    height: "45px",
    transform: "rotate(-24deg)",
    zIndex: "-1",
    opacity: "0.7",
    backgroundColor: "#d6d6d6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  waterMark: {
    width: "100%",
    height: "100%",
  },
  fontMedium: {
    fontFamily: "NunitoMedium",
  },
  fontBold: {
    fontFamily: "NunitoBold",
  },
});

const PDFFile = ({ pageData }: { pageData: PageData }) => {
  const {
    names,
    conferenceName,
    conferenceVenue,
    conferenceStartDate,
    picture,
    conferenceCode,
    conferenceEndDate,
    passportNumber,
    department,
    address,
    conferenceTheme,
  } = pageData;
  const startDate = conferenceStartDate.split("-")[2];
  const month = conferenceEndDate.split("-")[1];
  const monthName = monthNames[Number(month[1])];
  const date = conferenceEndDate.split("-")[2];
  const year = conferenceEndDate.split("-")[0];
  const dayPrefix =
    date == "01" ? "st" : date == "02" ? "nd" : date == "03" ? "rd" : "th";
  const time = new Date();
  return (
    <Document title={`${names}'s Invitation`} subject={`Invitation`}>
      <Page
        style={[
          styles.pageStyles,
          tw(
            "border-l-[40px] border-l-custom flex flex-col items-center justify-start",
          ),
        ]}
      >
        <View
          style={[
            tw(
              "w-[99.7%] h-[150] flex items-center justify-center border-[3.5px] border-custom",
            ),
          ]}
        >
          <View
            style={[
              tw(
                "w-[99.8%] h-[99.2%] flex flex-col items-center justify-end border-[1px] border-custom",
              ),
            ]}
          >
            <Image
              alt="logo image"
              src={`${base_url}/logo.png`}
              style={[tw("w-[230px] h-[32px] mt-[-5px]")]}
            />
            <Text
              style={[
                styles.fontBold,
                tw("w-[69%] text-center text-[13px] mt-[7px] mb-[3px]"),
              ]}
            >
              {conferenceName}{" "}
              {conferenceName.length > 47 ? `${conferenceCode}` : <></>}
            </Text>
            {conferenceName.length < 47 ? (
              <Text
                style={[
                  styles.fontBold,
                  tw("text-center text-[13px] mt-[1px] mb-[3px]"),
                ]}
              >
                {conferenceCode}
              </Text>
            ) : (
              <></>
            )}
            <Text
              style={[styles.fontBold, tw("text-[13px] font-bold")]}
            >
              {startDate}
              {getPrefix(startDate)} - {date}
              {getPrefix(date)} {monthName} {year}
            </Text>
            <Text
              style={[styles.fontBold, tw("text-[13px] font-bold mb-[10px]")]}
            >
              {conferenceVenue}
            </Text>
          </View>
        </View>
        <Text style={[styles.fontBold, tw("text-[13px] font-bold mt-[20px]")]}>
          Invitation Letter
        </Text>
        <View style={styles.waterMarkContainer}>
          <Image
            src={`${base_url}/logo.png`}
            style={{
              opacity: "0.5",
            }}
          />
        </View>
        <Text
          style={[
            styles.fontMedium,
            tw("text-[12px] w-full text-right px-[30px]"),
          ]}
        >
          Date of Issue: {time.getDate()}
          {getPrefix(time.getDate())} {monthNames[time.getMonth()]}{" "}
          {time.getFullYear()}
        </Text>
        <View
          style={[
            styles.fontMedium,
            tw("w-full flex px-[30px] flex-col justify-start mt-[25px]"),
          ]}
        >
          <View
            style={[
              styles.fontMedium,
              tw("w-full flex flex-row items-end justify-between"),
            ]}
          >
            <View style={[styles.fontMedium, tw("w-[68%]")]}>
              <Text style={[styles.fontBold, tw("text-[12px]")]}>
                {pageData.names},
              </Text>
              <Text style={[styles.fontMedium, tw("w-[65%] text-[12px]")]}>
                {department}
              </Text>
              <Text style={[styles.fontMedium, tw("text-[12px]")]}>
                {address}
              </Text>
              <Text style={[styles.fontBold, tw("text-[12px]")]}>
                Passport No: {passportNumber}
              </Text>
            </View>
            <Image src={picture} style={[tw("w-[45px] h-[58px]")]} />
          </View>
          <Text style={[styles.fontBold, tw("text-[12px] mt-[9px]")]}>
            Warm greetings from the Research Leagues International Conference!!!
          </Text>
          <Text style={[styles.fontMedium, styles.bold]}>
            <Text style={[styles.fontBold]}>{names}</Text> is kindly invited to
            attend the{" "}
            <Text style={[styles.fontBold]}>
              {conferenceName} on {date}
              {dayPrefix} {monthName} {year} in {conferenceVenue}.
            </Text>
          </Text>
          <Text style={[styles.fontMedium, tw("text-[12px] mt-[9px]")]}>
            RESEARCHLEAGUES is glad to invite academicians, students,
            researchers, and industry experts to the renowned Conference
            <Text style={styles.fontBold}>{conferenceCode}</Text>, which will be
            held in <Text style={styles.fontBold}>{conferenceVenue}</Text>
            on the{" "}
            <Text style={styles.fontBold}>
              {startDate}
              {getPrefix(startDate)} - {date}
              {dayPrefix} {monthName} {year}
            </Text>{" "}
            under the theme{" "}
            <Text style={styles.fontBold}>"{conferenceTheme}".</Text>
          </Text>
          <Text style={[styles.fontMedium, tw("text-[12px] mt-[9px]")]}>
            Through a variety of distinguished addresses, plenary sessions,
            workshops, symposiums, oral and poster presentations, virtual/video
            presentations, and webinars,{" "}
            <Text style={styles.fontBold}>{conferenceCode}</Text>
            promotes broad logical discourse, both intra- and
            inter-disciplinary, among Universities, Colleges, Academicians, and
            Department personnel.
          </Text>
          <Text style={[styles.fontMedium, tw("text-[12px] mt-[9px]")]}>
            (Please note that the above-mentioned conference will be held via
            virtual medium if any unforeseen circumstances emerge, such as a
            pandemic or travel limitations; participants will be alerted in
            advance.)
          </Text>
          <Text style={[styles.fontMedium, tw("text-[12px] mt-[10px]")]}>
            Sincerely,
          </Text>
        </View>
        <View
          style={[
            styles.fontMedium,
            tw("w-full flex px-[30px] flex-col items-start mt-[-10px]"),
          ]}
        >
          <View
            style={[
              styles.fontMedium,
              tw("w-full flex flex-row items-center gap-10"),
            ]}
          >
            <Image
              alt="Signature image"
              src={`${base_url}/signature.png`}
              style={[styles.fontMedium, tw("w-[120px] h-[37px]")]}
            />
            <Image
              alt="stamp image"
              src={`${base_url}/stamp.png`}
              style={[tw("w-[90px] h-[80px]")]}
            />
          </View>
          <Text style={[styles.fontMedium, tw("text-[12px] mt-[-25px]")]}>
            Kiera Jones
          </Text>
          <Text style={[styles.fontMedium, tw("text-[12px]")]}>
            Program Manager
          </Text>
          <Text style={[styles.fontMedium, tw("text-[12px]")]}>
            RESEARCH LEAGUES Conference
          </Text>
          <Text style={[styles.fontMedium, tw("text-[12px]")]}>
            Contact: +1 (438) 5190266
          </Text>
        </View>

        <View
          style={[tw("w-full px-[30px] mt-[30px] flex flex-col items-center ")]}
        >
          <View
            style={[
              tw("w-full flex flex-row items-center justify-center gap-4"),
            ]}
          >
            <Text style={[styles.fontBold, tw("text-[11px]")]}>
              <Text style={[tw("font-gray")]}>Website:</Text>
              <Link src="https://www.researchleagues.com">
                www.researchleagues.com
              </Link>
            </Text>
            <Text style={[styles.fontBold, tw("text-[11px]")]}>
              <Text style={[tw("font-gray")]}>Email:</Text>
              <Link src="mailto:team@researchleagues.com">
                team@researchleagues.com
              </Link>
            </Text>
          </View>
          <Text style={[styles.fontBold, tw("mt-[14px] text-[11px] text-red")]}>
            <Text style={[tw("uppercase")]}>RESEARCH LEAGUES</Text> Conference
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFFile;
