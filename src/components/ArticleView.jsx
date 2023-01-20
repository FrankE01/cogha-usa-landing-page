import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Link } from "gatsby";
import NavLink from "./NavLink";

const ArticleView = ({ article }) => {
  return (
    <div>
      <p
        style={{
          fontFamily: "Inter var",
          fontSize: "48px",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        COGHA, USA. A New Paradigm
      </p>
      <p
        style={{
          fontFamily: "Inter var",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        December 24, 2022
      </p>

      <div
        style={{ display: "flex", justifyContent: "center", margin: "60px" }}
      >
        <StaticImage
          alt="image25"
          src="../images/image25.jpg"
          placeholder="blurred"
        />
      </div>

      <p
        className="mx-auto my-24"
        style={{
          fontFamily: "Inter var",
          fontSize: "16px",
          width: "80vw",
        }}
      >
        On the 10th of December 2022 at the Washington Dulles Marriot Hotel in
        Washington DC, COGHA, USA was officially launched. The Impressive
        Ceremony was laced with important personalities from the length and
        breadth of the United States who honored the invitation to be part of
        this ground breaking event. Traditional chiefs who are custodians of our
        rich culture were equally represented in their resplendence. On behalf
        of Traditional Chiefs, Nana Obuabasa Kwaa Enyinful III, Odzikrow of
        Ekumfi Swedru in the Ekumfi Traditional Area pledged their absolute
        support for this initiative and commended the visionary organizers for
        such foresight. He called on all and sundry to support this initiative
        in whatever capacity they could because this was an initiative worthy of
        such. Mr Francis Doku, General Manager of the 3 Group a subsidiary of
        Media General, Ghana’s biggest Media Company, also aligned with the
        mission and vision of COGHA,USA and promised to avail the media empire
        to COGHA,USA for the needed promotion and exhibition of its Summer
        Festival. Christina Nicholas, Director of Communications for COGHA,USA,
        outlined the company’s mission and vision and called on Corporate
        America to partner the company to make this Noble Dream a Reality. She
        also assured the upcoming generation of Ghanaian talents they now have
        an international forum for them to exhibit their God-given talents.
        Guests were also treated to electrifying musical performances from the
        serenading voices of Rosemond and daughter and ChoirMaster, who left
        them wanting for more but assured them of that at the Summer event as
        well as Benita Biney, a beautiful young lady who's mastery of the adowa
        dance held guests spellbound. Virginia Senator Mark Warner, sent a
        message of solidarity to COGHA,USA thanking them for choosing Virginia
        as the mainstay of COGHA,USA and contributing their quota to facilitate
        employment opportunities in the State. Lydia Harris, President of
        COGHA,USA thanked all the invited guests for honoring the invitation and
        assured them the launch was just a precursor to what the summer event
        promised and the very apparent excitement at the launch was motivation
        to make the summer event one of a lifetime Guests had the opportunity to
        interact with the chiefs and artists after the event as well as engage
        in a colorful photoshoot session. The first Edition of COGHA,USA is
        scheduled for June 2023 in Virginia.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "center",
          margin: "100px",
        }}
      >
        <p
          style={{
            fontFamily: "Quicksand var",
            fontWeight: "600",
            fontSize: "64px",
          }}
        >
          Next Article
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            position: "relative",
            top: "16px",
          }}
        >
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 36L62.1213 33.8787L64.2426 36L62.1213 38.1213L60 36ZM26 39C24.3431 39 23 37.6569 23 36C23 34.3431 24.3431 33 26 33V39ZM44.1213 15.8787L62.1213 33.8787L57.8787 38.1213L39.8787 20.1213L44.1213 15.8787ZM62.1213 38.1213L44.1213 56.1213L39.8787 51.8787L57.8787 33.8787L62.1213 38.1213ZM60 39H26V33H60V39Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <hr style={{ width: "80vw" }} className="mx-auto" />
      <section
        className="w-full pt-10 pb-2 px-10 mx-auto"
        style={{ display: "flex", flexDirection: "column", gap: "60px" }}
      >
        <div
          className="mx-auto"
          style={{
            display: "flex",
            justifyContent: "center",
            width: window.innerWidth < 500 ? "50vw" : "",
          }}
        >
          <StaticImage
            alt="cogha"
            src="../images/cogha.png"
            placeholder="blurred"
          />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: window.innerWidth < 500 ? "none" : "flex",
                justifyContent: "space-between",
                width: "450px",
              }}
            >
              <Link to="/#home" spy smooth>
                <NavLink>Home</NavLink>
              </Link>
              <Link to="/#whatWeDo" spy smooth>
                <NavLink>What We Do</NavLink>
              </Link>
              <Link to="/#gallery" spy smooth>
                <NavLink>Gallery</NavLink>
              </Link>
              <Link to="/#getInTouch" spy smooth activeClass="active">
                <NavLink>Get In Touch</NavLink>
              </Link>
              <Link to="/articles">
                <NavLink>Articles</NavLink>
              </Link>
            </div>
            <div
              className={window.innerWidth < 500 ? "mx-auto" : ""}
              style={{ display: "flex", flexDirection: "row", gap: "3vw" }}
            >
              <div
                style={{
                  width: window.innerWidth < 500 ? "30px" : "3vw",
                  height: window.innerWidth < 500 ? "30px" : "3vw",
                  borderRadius: window.innerWidth < 500 ? "30px" : "3vw",
                  padding: "5px",
                  backgroundColor: "#CCC7FF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  width="26"
                  height="21"
                  viewBox="0 0 26 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.9667 2.71657C25.0271 3.12419 24.0335 3.39365 23.0167 3.51657C24.0894 2.87572 24.8933 1.86755 25.2792 0.679071C24.2711 1.27915 23.1676 1.70194 22.0167 1.92907C21.2474 1.09479 20.2229 0.539441 19.1039 0.350135C17.985 0.160829 16.8349 0.348269 15.8339 0.883057C14.833 1.41785 14.0378 2.26973 13.5732 3.30512C13.1086 4.3405 13.0008 5.50081 13.2667 6.60407C11.2285 6.50098 9.23473 5.97026 7.41499 5.0464C5.59526 4.12253 3.99023 2.82619 2.70417 1.24157C2.2531 2.02928 2.01607 2.92135 2.01667 3.82907C2.01508 4.67205 2.22195 5.50234 2.61887 6.24603C3.01579 6.98971 3.59045 7.62371 4.29167 8.09157C3.47665 8.06939 2.67903 7.85069 1.96667 7.45407V7.51657C1.97278 8.69768 2.38667 9.84044 3.13832 10.7515C3.88997 11.6626 4.93324 12.2861 6.09167 12.5166C5.64574 12.6523 5.18277 12.7238 4.71667 12.7291C4.39404 12.7253 4.0722 12.696 3.75417 12.6416C4.08406 13.6576 4.72245 14.5455 5.58052 15.1818C6.43858 15.818 7.47364 16.171 8.54168 16.1916C6.73818 17.6107 4.51153 18.3851 2.21667 18.3916C1.79884 18.3929 1.38134 18.3679 0.966675 18.3166C3.30971 19.8294 6.04019 20.6325 8.82917 20.6291C10.7538 20.6491 12.6631 20.2853 14.4456 19.5592C16.228 18.833 17.848 17.7589 19.2107 16.3997C20.5734 15.0405 21.6516 13.4233 22.3824 11.6427C23.1131 9.8621 23.4817 7.95373 23.4667 6.02907C23.4667 5.81657 23.4667 5.59157 23.4667 5.36657C24.4475 4.63508 25.2935 3.73835 25.9667 2.71657V2.71657Z"
                    fill="#321FFF"
                  />
                </svg>
              </div>

              <div
                style={{
                  width: window.innerWidth < 500 ? "30px" : "3vw",
                  height: window.innerWidth < 500 ? "30px" : "3vw",
                  borderRadius: window.innerWidth < 500 ? "30px" : "3vw",
                  padding: "5px",
                  backgroundColor: "#CCC7FF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.43 9.06783C10.9628 9.06783 10.5061 9.20637 10.1176 9.46593C9.72917 9.72549 9.4264 10.0944 9.24761 10.5261C9.06882 10.9577 9.02204 11.4326 9.11319 11.8909C9.20433 12.3491 9.42931 12.77 9.75967 13.1004C10.09 13.4307 10.5109 13.6557 10.9692 13.7468C11.4274 13.838 11.9023 13.7912 12.334 13.6124C12.7656 13.4336 13.1345 13.1309 13.3941 12.7424C13.6537 12.3539 13.7922 11.8972 13.7922 11.43C13.7922 11.1198 13.7311 10.8126 13.6124 10.5261C13.4937 10.2395 13.3197 9.97905 13.1003 9.7597C12.881 9.54035 12.6206 9.36635 12.334 9.24764C12.0474 9.12893 11.7402 9.06783 11.43 9.06783ZM20.8883 6.7342C20.8833 5.99864 20.7479 5.2698 20.4883 4.58155C20.2971 4.07793 20.0013 3.62057 19.6204 3.23966C19.2395 2.85875 18.7821 2.56294 18.2785 2.37175C17.5902 2.11216 16.8614 1.97672 16.1258 1.9717C14.8971 1.90503 14.5351 1.90503 11.43 1.90503C8.32485 1.90503 7.9629 1.90503 6.73417 1.9717C5.99861 1.97672 5.26977 2.11216 4.58152 2.37175C4.0779 2.56294 3.62054 2.85875 3.23963 3.23966C2.85871 3.62057 2.56291 4.07793 2.37172 4.58155C2.11213 5.2698 1.97668 5.99864 1.97167 6.7342C1.905 7.96293 1.905 8.32488 1.905 11.43C1.905 14.5352 1.905 14.8971 1.97167 16.1259C1.98193 16.864 2.11719 17.5951 2.37172 18.288C2.56206 18.7894 2.85762 19.2441 3.2385 19.6215C3.61778 20.0047 4.07612 20.3005 4.58152 20.4883C5.26977 20.7479 5.99861 20.8833 6.73417 20.8884C7.9629 20.955 8.32485 20.955 11.43 20.955C14.5351 20.955 14.8971 20.955 16.1258 20.8884C16.8614 20.8833 17.5902 20.7479 18.2785 20.4883C18.7839 20.3005 19.2422 20.0047 19.6215 19.6215C20.0024 19.2441 20.2979 18.7894 20.4883 18.288C20.7476 17.5964 20.883 16.8645 20.8883 16.1259C20.955 14.8971 20.955 14.5352 20.955 11.43C20.955 8.32488 20.955 7.96293 20.8883 6.7342ZM18.469 14.3542C18.4384 14.942 18.313 15.521 18.0975 16.0687C17.9126 16.5256 17.6377 16.9407 17.2892 17.2892C16.9406 17.6377 16.5256 17.9126 16.0687 18.0975C15.5158 18.301 14.9336 18.4136 14.3446 18.4309C13.5922 18.4309 13.3921 18.4309 11.43 18.4309C9.46785 18.4309 9.26782 18.4309 8.51535 18.4309C7.92645 18.4136 7.34424 18.301 6.79132 18.0975C6.31898 17.922 5.89243 17.642 5.54355 17.2784C5.19843 16.9367 4.9319 16.5239 4.7625 16.0687C4.55824 15.5164 4.44875 14.9335 4.43865 14.3447C4.43865 13.5922 4.43865 13.3922 4.43865 11.43C4.43865 9.46788 4.43865 9.26785 4.43865 8.51538C4.44875 7.92657 4.55824 7.34369 4.7625 6.79135C4.93803 6.31901 5.21806 5.89246 5.58165 5.54358C5.92487 5.20032 6.33723 4.93407 6.79132 4.76253C7.34424 4.55908 7.92645 4.4465 8.51535 4.42915C9.26782 4.42915 9.46785 4.42915 11.43 4.42915C13.3921 4.42915 13.5922 4.42915 14.3446 4.42915C14.9336 4.4465 15.5158 4.55908 16.0687 4.76253C16.541 4.93806 16.9676 5.21809 17.3164 5.58168C17.6616 5.92339 17.9281 6.33618 18.0975 6.79135C18.3009 7.34427 18.4135 7.92648 18.4309 8.51538C18.4309 9.26785 18.4309 9.46788 18.4309 11.43C18.4309 13.3922 18.4975 13.5922 18.469 14.3447V14.3542ZM16.945 7.2676C16.8316 6.95993 16.6528 6.68052 16.4209 6.44866C16.189 6.21679 15.9096 6.03799 15.6019 5.92458C15.1795 5.77814 14.7346 5.70721 14.2875 5.71503C13.5445 5.71503 13.335 5.71503 11.43 5.71503C9.525 5.71503 9.31545 5.71503 8.5725 5.71503C8.12317 5.71942 7.67817 5.80326 7.25805 5.96268C6.95509 6.07094 6.67864 6.24244 6.44707 6.46579C6.21551 6.68914 6.03414 6.95922 5.91502 7.25808C5.7767 7.68229 5.70912 8.12637 5.715 8.57253C5.715 9.31548 5.715 9.52503 5.715 11.43C5.715 13.335 5.715 13.5446 5.715 14.2875C5.72444 14.7363 5.80812 15.1805 5.96265 15.602C6.07606 15.9097 6.25486 16.1891 6.48673 16.4209C6.71859 16.6528 6.998 16.8316 7.30567 16.945C7.71207 17.0945 8.13973 17.1781 8.5725 17.1927C9.31545 17.1927 9.525 17.1927 11.43 17.1927C13.335 17.1927 13.5445 17.1927 14.2875 17.1927C14.7368 17.1883 15.1818 17.1044 15.6019 16.945C15.9096 16.8316 16.189 16.6528 16.4209 16.4209C16.6528 16.1891 16.8316 15.9097 16.945 15.602C17.1044 15.1819 17.1882 14.7369 17.1926 14.2875C17.1926 13.5446 17.1926 13.335 17.1926 11.43C17.1926 9.52503 17.1926 9.31548 17.1926 8.57253C17.1929 8.12276 17.1089 7.67691 16.945 7.25808V7.2676ZM11.43 15.0686C10.9526 15.0686 10.4799 14.9744 10.039 14.7914C9.59811 14.6085 9.19763 14.3403 8.86052 14.0023C8.52341 13.6643 8.25629 13.2631 8.07448 12.8217C7.89266 12.3803 7.79972 11.9074 7.80097 11.43C7.80098 10.71 8.01462 10.0061 8.41485 9.40757C8.81508 8.80901 9.38391 8.34266 10.0493 8.06755C10.7147 7.79243 11.4468 7.72094 12.1529 7.86211C12.8589 8.00327 13.5073 8.35076 14.0157 8.86057C14.5242 9.37039 14.87 10.0196 15.0093 10.726C15.1486 11.4325 15.0752 12.1644 14.7984 12.8291C14.5215 13.4937 14.0537 14.0613 13.4541 14.46C12.8544 14.8587 12.15 15.0705 11.43 15.0686ZM15.24 8.50585C15.0294 8.48357 14.8346 8.38414 14.693 8.22674C14.5513 8.06934 14.473 7.8651 14.473 7.65337C14.473 7.44163 14.5513 7.23739 14.693 7.07999C14.8346 6.92259 15.0294 6.82317 15.24 6.80088C15.4506 6.82317 15.6454 6.92259 15.787 7.07999C15.9287 7.23739 16.007 7.44163 16.007 7.65337C16.007 7.8651 15.9287 8.06934 15.787 8.22674C15.6454 8.38414 15.4506 8.48357 15.24 8.50585Z"
                    fill="#321FFF"
                  />
                </svg>
              </div>

              <div
                style={{
                  width: window.innerWidth < 500 ? "30px" : "3vw",
                  height: window.innerWidth < 500 ? "30px" : "3vw",
                  borderRadius: window.innerWidth < 500 ? "30px" : "3vw",
                  padding: "5px",
                  backgroundColor: "#CCC7FF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9 6.65004H21.25V2.67504C20.1122 2.55672 18.969 2.49831 17.825 2.50004C14.425 2.50004 12.1 4.57504 12.1 8.37504V11.65H8.26251V16.1H12.1V27.5H16.7V16.1H20.525L21.1 11.65H16.7V8.81254C16.7 7.50004 17.05 6.65004 18.9 6.65004Z"
                    fill="#321FFF"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleView;
