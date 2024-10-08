// Purpose: To create a calendarify website for NTU students
<!DOCTYPE html>
<html
  data-wf-domain="calendarify-ntu.vercel.app"
  data-wf-page="65eb7dd97ab78afe84bdf3a2"
  data-wf-site="5fcb349058268443b1f5dbdb"
>
  <head>
    <meta charset="utf-8" />
    <title>
      AI Calendar | Meet Calendarify&#x27;s AI Calendar Assistant 
    </title>
    <meta
      content="The app that uses AI to help you get 25% more done. For only 62 cents a day manage your calendar, todos and meetings"
      name="description"
    />
    <meta
      content="AI Calendar | Meet Calendarify&#x27;s AI Calendar Assistant"
      property="og:title"
    />
    <meta
      content="The app that uses AI to help you get 25% more done. For only 62 cents a day manage your calendar, todos and meetings"
      property="og:description"
    />
    <meta
      content="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/6545926009197107868c5038_preview_og_img.png"
      property="og:image"
    />
    <meta
      content="AI Calendar | Meet Calendarify&#x27;s AI Calendar Assistant"
      property="twitter:title"
    />
    <meta
      content="The app that uses AI to help you get 25% more done. For only 62 cents a day manage your calendar, todos and meetings"
      property="twitter:description"
    />
    <meta
      content="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/6545926009197107868c5038_preview_og_img.png"
      property="twitter:image"
    />
    <meta property="og:type" content="website" />
    <meta content="summary_large_image" name="twitter:card" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link
      href="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/css/motion-dev.3d52505a3.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link
      href="https://fonts.gstatic.com"
      rel="preconnect"
      crossorigin="anonymous"
    />
    <script
      src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
      type="text/javascript"
    ></script>
    <script type="text/javascript">
      WebFont.load({
        google: {
          families: [
            "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
            "Inter:100,200,300,regular,500,600,700,800,900",
            "Albert Sans:regular,500,600,700",
          ],
        },
      });
    </script>
    <script type="text/javascript">
      !(function (o, c) {
        var n = c.documentElement,
          t = " w-mod-";
        (n.className += t + "js"),
          ("ontouchstart" in o ||
            (o.DocumentTouch && c instanceof DocumentTouch)) &&
            (n.className += t + "touch");
      })(window, document);
    </script>
    <link
      href="logo calendarify (1).png"
      rel="shortcut icon"
      type="image/x-icon"
    />
    <link
      href="logo calendarify (1).png"
      rel="apple-touch-icon"
    />
    <link href="https://calendarify-ntu.vercel.app/" rel="canonical" />
    <script src="https://app.enzuzo.com/scripts/cookiebar/b8547b10-2d1c-11ef-8ffc-8b05bfea15a1"></script>
    <!--segment-->
    <script>
      !(function () {
        const writeKey =
          window.location.hostname === "calendarify-ntu.vercel.app"
            ? "WQQU1TebtGFCogK5Ty5V9FnfqdLuSRKS"
            : "CDoWkXaIAAxZYrjFZYr85W9aaZDitaAu";
        const getCookieValue = (name) =>
          document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop();
        let mot_session = getCookieValue("mot_session");
        if (!mot_session) {
          // uuidv4
          mot_session = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
            /[018]/g,
            (c) =>
              (
                c ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
              ).toString(16)
          );
          domain = window.location.hostname.endsWith("calendarify-ntu.vercel.app")
            ? ";domain=calendarify-ntu.vercel.app"
            : "";
          document.cookie = `mot_session=${mot_session}${domain}`;
        }
        var analytics = (window.analytics = window.analytics || []);
        if (!analytics.initialize)
          if (analytics.invoked)
            window.console &&
              console.error &&
              console.error("Segment snippet included twice.");
          else {
            analytics.invoked = !0;
            analytics.methods = [
              "trackSubmit",
              "trackClick",
              "trackLink",
              "trackForm",
              "pageview",
              "identify",
              "reset",
              "group",
              "track",
              "ready",
              "alias",
              "debug",
              "page",
              "once",
              "off",
              "on",
              "addSourceMiddleware",
              "addIntegrationMiddleware",
              "setAnonymousId",
              "addDestinationMiddleware",
            ];
            analytics.factory = function (e) {
              return function () {
                var t = Array.prototype.slice.call(arguments);
                t.unshift(e);
                analytics.push(t);
                return analytics;
              };
            };
            for (var e = 0; e < analytics.methods.length; e++) {
              var key = analytics.methods[e];
              analytics[key] = analytics.factory(key);
            }
            analytics.load = function (key, e) {
              var t = document.createElement("script");
              t.type = "text/javascript";
              t.async = !0;
              t.src = "https://segmentcdn.calendarify-ntu.vercel.app/snippet/" + key;
              var n = document.getElementsByTagName("script")[0];
              n.parentNode.insertBefore(t, n);
              analytics._loadOptions = e;
            };
            analytics._writeKey = writeKey;
            analytics._cdn = "https://segmentcdn.calendarify-ntu.vercel.app";
            analytics.SNIPPET_VERSION = "4.15.3";
            analytics.setAnonymousId(mot_session);
            analytics.load(writeKey);
          }
        // partnerstack

        var gs = document.createElement("script");
        gs.src = "https://get.calendarify-ntu.vercel.app/pr/js";
        gs.type = "text/javascript";
        gs.async = "true";
        gs.onload = gs.onreadystatechange = function () {
          var rs = this.readyState;
          if (rs && rs != "complete" && rs != "loaded") return;
          try {
            growsumo._initialize("pk_Z9Qwv6u8eUNOtPSbAfixoxmJCdANuCwa");
            if (typeof growsumoInit === "function") {
              growsumoInit();
            }
          } catch (e) {}
        };
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(gs, s);
      })();
    </script>

    <!--- styling --->
    <style>
      body {
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
      }

      .w-background-video > video {
        max-width: -webkit-fill-available;
      }
    </style>

    <!--enterprise modal prevent scroll when open-->
    <script>
      Webflow.push(function () {
        $(".open-team-member-modal").click(function (e) {
          e.preventDefault();
          $("body").css("overflow", "hidden");
        });

        $("#team-member-modal-close").click(function (e) {
          e.preventDefault();
          $("body").css("overflow", "auto");
        });
      });
    </script>
    <style>
     

    
      .ytp-chrome-top {
        display: none !important;
      }
    </style>

    <!--mobile redirect-->
    <script>
      if (navigator.userAgent.includes("Mobile")) {
        window.location.href = `${window.location.origin}/m${window.location.search}`;
      }
    </script>
  </head>
  <body>
    <div class="global-styles w-embed">
      <style>
        /* Snippet gets rid of top margin on first element in any rich text*/
        .w-richtext > :first-child {
          margin-top: 0;
        }

        /* Snippet gets rid of bottom margin on last element in any rich text*/
        .w-richtext > :last-child,
        .w-richtext ol li:last-child,
        .w-richtext ul li:last-child {
          margin-bottom: 0;
        }

        /* Snippet prevents all click and hover interaction with an element */
        .clickable-off {
          pointer-events: none;
        }

        /* Snippet enables all click and hover interaction with an element */
        .clickable-on {
          pointer-events: auto;
        }

        /* Snippet enables you to add class of div-square which creates and maintains a 1:1 dimension of a div.*/
        .div-square::after {
          content: "";
          display: block;
          padding-bottom: 100%;
        }

        /*Hide focus outline for main content element*/
        main:focus-visible {
          outline: -webkit-focus-ring-color auto 0px;
        }

        /* Make sure containers never lose their center alignment*/
        .container-medium,
        .container-small,
        .container-large {
          margin-right: auto !important;
          margin-left: auto !important;
        }

        /*Reset buttons, and links styles*/
        a {
          color: inherit;
          text-decoration: inherit;
          font-size: inherit;
        }

        /*Apply "..." after 3 lines of text */
        .text-style-3lines {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        /*Apply "..." after 2 lines of text */
        .text-style-2lines {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      </style>
    </div>
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="0"
      id="navbar"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      class="navbar-5 white w-nav"
    >
      <div class="nav-wrapper w-container">
        <a
          href="/"
          aria-current="page"
          class="navlogo with-text w-nav-brand w--current"
          ><img
            src="calendarify (5).png"
            loading="lazy"
            alt=""
            class="motionlogo" /><img
            src="calendarify (5).png"
            loading="lazy"
            alt=""
            class="mobile-nav_logo"
        /></a>
        <nav role="navigation" class="nav-menu-5 landing-page-2 w-nav-menu">
          <div data-hover="true" data-delay="0" class="nav-dropdown w-dropdown">
            <div class="nav-link w-dropdown-toggle">
              <div class="nav-dropdown-icon w-icon-dropdown-toggle"></div>
              <div>Home</div>
            </div>
            <nav class="dropdown-window w-dropdown-list">
              <a href="/calendar" class="dropdown-nav-link w-inline-block"
                ><img
                  alt=""
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/613b91c5c820213b148b8358_calendar.svg"
                  class="image-106"
                />
                <div><div>Calendar</div></div></a
       
             </nav>
          </div>
          <a href="/timetable" class="nav-link w-inline-block"><div>Timetable</div></a>
    
          ><a
            href="/about"
            class="nav-link w-nav-link"
            >About</a
          ><a href="/about" class="nav-link w-nav-link"
            >Log in</a
          ><a
            href="/login"
            class="button cta-button-v1 w-button"
            >Upload Your Calendar</a
          ><a
            id="checkout-survey-button"
            data-w-id="1fbbc89a-1ade-4636-2c4b-773a4d4aa04a"
            href="/login"
            class="button open-team-member-modal w-button"
            >Upload Your Calendar</a
          >
        </nav>
        <div class="menu-button-5 w-nav-button">
          <div class="w-icon-nav-menu"></div>
        </div>
        <a
          href="/login"
          class="button mobile-nav-button w-inline-block"
          ><div class="c__button-text noncap">Upload Your Calendar</div></a
        >
      </div>
    </div>
    <div id="page-wrapper" class="page-wrapper">
      <div id="main-wrapper" class="main-wrapper">
        <div class="section-lp-hero-2">
          <div class="lp-wrapper lp-hero-2-wrapper">
            <div class="lp-hero-2-title mobile-align-left">
              <div class="margin-bottom margin-small">
                <div class="subtitles-container">
                  <div
                    id="amplitude-subtitle"
                    class="lp-hero-subtitle-container lp-subtitle"
                  >
                    <div class="rotating-copy-text blue-gradient-text-color">
                      NTU Hackathon Wellbeing Website
                    </div>
                    <img
                      src="Screenshot 2024-08-30 194038 (3).jpg"
                      loading="lazy"
                      sizes="(max-width: 100px) 100px, 100.1484375px"
                      srcset="
                          Screenshot 2024-08-30 194038.jpg (3) 1000w, 
                      alt= 
                      class="subtitle-amplitude-image
                    />
                  </div>
                </div>
              </div>
              <h1 class="lp-hero-title">
                AI Personalized <span class="blue-gradient-text-color">Scheduler,</span> 
                
                <span class="blue-gradient-text-color">Calendarify</span>
              </h1>
              <div class="margin-bottom margin-medium">
                <div class="lp-subtext">
                  By
                  <span class="blue-gradient-text-color"
                    >Health AI</span
                  >. Created by NTU students for NTU students.
                </div>
              </div>
              <div class="margin-bottom margin-small hide-tablet">
                <a
                  href="/login"
                  class="button cta-button-v1 w-button"
                  >Upload Your Calendar</a
                ><a
                  id="checkout-survey-button"
                  data-w-id="1fbbc89a-1ade-4636-2c4b-773a4d4aa04a"
                  href="/login"
                  class="button open-team-member-modal w-button"
                  >Upload Your Calendar</a
                >
              </div>
              <div id="hero-mobile-form" class="hero-mobile-form w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  class="hero-mobile-form-wrapper"
                  data-wf-page-id="65eb7dd97ab78afe84bdf3a2"
                  data-wf-element-id="ced4decd-2ee9-927e-8024-83420ba0f16c"
                >
                  <div
                    id="w-node-ced4decd-2ee9-927e-8024-83420ba0f16d-84bdf3a2"
                    class="margin-bottom margin-small"
                  >
                    <input
                      class="text-field w-input"
                      maxlength="256"
                      name="email-2"
                      data-name="Email 2"
                      placeholder="Enter your email address"
                      type="email"
                      id="email"
                      required=""
                    />
                  </div>
                  <input
                    id="email-modal-open"
                    type="submit"
                    data-wait="Get Started"
                    class="button max-width-full w-button"
                    value="Get Started"
                  />
                </form>
                <div
                  data-w-id="ced4decd-2ee9-927e-8024-83420ba0f170"
                  class="hero-mobile-form-success-trigger"
                ></div>
                <div class="hero-mobile-form-success w-form-done">
                  <div class="hero-mobile-form-success-text">
                    Thank you! Your submission has been received!
                  </div>
                </div>
                <div class="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
              <div class="margin-top margin-small">
                <div class="lp-hint-text">
               
                </div>
              </div>
            </div>
            <div class="lp-illu-hero-title">
              Automatically plan your day just by uploading your calendar
            </div>
          </div>
          <div class="lp-ai-planning-animation-wrapper">
            <img
              src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e386f5ed267b824fdf49d2_hero-2-gradient.webp"
              loading="eager"
              sizes="(max-width: 2880px) 100vw, 2880px"
              srcset="
                https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e386f5ed267b824fdf49d2_hero-2-gradient-p-500.webp   500w,
                https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e386f5ed267b824fdf49d2_hero-2-gradient-p-800.webp   800w,
                https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e386f5ed267b824fdf49d2_hero-2-gradient-p-1080.webp 1080w,
                https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e386f5ed267b824fdf49d2_hero-2-gradient-p-1600.webp 1600w,
                https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e386f5ed267b824fdf49d2_hero-2-gradient-p-2000.webp 2000w,
                https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e386f5ed267b824fdf49d2_hero-2-gradient-p-2600.webp 2600w,
                https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e386f5ed267b824fdf49d2_hero-2-gradient.webp        2880w
              "
              alt=""
              class="lp-hero-2-gradient"
            />
            <div class="lp-wrapper center">
              <div class="lp-animation-full-width rounded-border">
                <img
                  src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65df5afa9a81d3d298b9966f_animation-img.webp"
                  alt=""
                  sizes="(max-width: 1919px) 81vw, 1188px"
                  srcset="
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65df5afa9a81d3d298b9966f_animation-img-p-500.webp  500w,
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65df5afa9a81d3d298b9966f_animation-img-p-800.webp  800w,
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65df5afa9a81d3d298b9966f_animation-img.webp       1064w
                  "
                  class="lp-animation-full-width-image"
                />
                <div class="lp-full-width-animation-embed w-embed">
                  <div
                    style="width: 100%; height: 100%"
                    class="w-background-video w-background-video-atom"
                  >
                    <video
                      playsinline
                      loop
                      muted
                      autoplay=""
                      loop=""
                      muted=""
                      playsinline=""
                      data-wf-ignore="true"
                      data-object-fit="cover"
                      class="inlinevideo"
                    >
                      <source
                        src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb%2F667594439941504f6501c6bc_hero_animation-min-transcode.mp4"
                        data-wf-ignore="true"
                      />
                    </video>
                  </div>
                </div>
                <img
                  src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e3859925b0d4343d678cd3_lp-full-width-animation-event.webp"
                  loading="eager"
                  alt=""
                  class="show-on-scroll lp-full-width-animation-event left"
                /><img
                  src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e385aa833fc8d3e08f5f1e_lp-full-width-animation-event-2.webp"
                  loading="lazy"
                  alt=""
                  class="show-on-scroll lp-full-width-animation-event right"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="logo-section-1" class="section-home-logos">
          <div class="page-padding">
            <div class="container-medium">
              <div class="margin-bottom margin-small">
                <div class="text-align-center">
                  
        <div class="section-home-comparison">
          <div class="page-padding">
            <div class="container-medium">
              <div class="home-comparison_component">
                <div class="home-comparison_item home-comparison_item-old-way">
                  <div class="home-comparison_tag grey">The old way</div>
                  <div class="text-align-center">
                    <div class="heading-small">Manually plan your schedule</div>
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/628799812e7ec052269eeb38_old-image.webp"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 88vw, (max-width: 991px) 87vw, (max-width: 1279px) 41vw, 481.984375px"
                    srcset="
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/628799812e7ec052269eeb38_old-image-p-500.webp 500w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/628799812e7ec052269eeb38_old-image-p-800.webp 800w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/628799812e7ec052269eeb38_old-image.webp       936w
                    "
                    alt="Illustration showing a bunch of tools including mobile todo app, paper notes, calendar app and project manager app"
                    class="home-comparison_image"
                  />
                  <div class="home-comparison_list">
                    <div class="home-comparison_list-item">
                      <img
                        src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/613b8d324a478c5f957a0cf3_x.svg"
                        loading="lazy"
                        alt=""
                        class="home-comparison_list-icon"
                      />
                      <p class="home-comparison_list-item-text">
                        <span class="text-weight-semibold"
                          >Endless to-do lists.</span
                        >
                        Never check everything off.
                      </p>
                    </div>
                    <div class="home-comparison_list-item">
                      <img
                        src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/613b8d324a478c5f957a0cf3_x.svg"
                        loading="lazy"
                        alt=""
                        class="home-comparison_list-icon"
                      />
                      <p class="home-comparison_list-item-text">
                        <span class="text-weight-semibold"
                          >Manual prioritization. </span
                        >Worry priorities are wrong.
                    
                    </div>
                    <div class="home-comparison_list-item">
                      <img
                        src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/613b8d324a478c5f957a0cf3_x.svg"
                        loading="lazy"
                        alt=""
                        class="home-comparison_list-icon"
                      />
                      <p class="home-comparison_list-item-text">
                        <span class="text-weight-semibold"
                          >Stress and overwhelm.</span
                        >
                        Life feels out of control.
                      </p>
                    </div>
                    <div class="home-comparison_list-item">
                      <img
                        src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/613b8d324a478c5f957a0cf3_x.svg"
                        loading="lazy"
                        alt=""
                        class="home-comparison_list-icon"
                      />
                      <p class="home-comparison_list-item-text">
                        <span class="text-weight-semibold"
                          >No personal life.</span
                        >
                        What's a weekend, anyway?
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_628b2c18-8f2f-de1e-1106-8b49dec81806-84bdf3a2"
                  class="home-comparison_gradient-border lp-new"
                >
                  <div
                    class="home-comparison_item home-comparison_item-gradient-new-way"
                  >
                    <div
                      class="home-comparison_tag background-color-gradient blue-gradient"
                    >
                      The new way
                    </div>
                    <div class="text-align-center">
                      <div class="heading-small">
                        Let Calendarify build your schedule
                      </div>
                    </div>
                    <img
                      src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/6287995cde0a4d34a94beea1_new-image.webp"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 88vw, (max-width: 991px) 87vw, (max-width: 1279px) 41vw, 479.984375px"
                      srcset="
                        https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/6287995cde0a4d34a94beea1_new-image-p-500.webp 500w,
                        https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/6287995cde0a4d34a94beea1_new-image-p-800.webp 800w,
                        https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/6287995cde0a4d34a94beea1_new-image.webp       936w
                      "
                      alt="Illustration of Calendarify web app"
                      class="home-comparison_image"
                    />
                    <div class="home-comparison_list">
                      <div class="home-comparison_list-item">
                        <img
                          src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65eb8056e842ab4a2619255b_blue-check-gradient.svg"
                          loading="lazy"
                          alt=""
                          class="home-comparison_list-icon"
                        />
                        <p class="home-comparison_list-item-text">
                          <span class="text-weight-semibold"
                            >Complete everything.</span
                          >
                          Calendarify builds a schedule for you.
                        </p>
                      </div>
                      <div class="home-comparison_list-item">
                        <img
                          src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65eb8056e842ab4a2619255b_blue-check-gradient.svg"
                          loading="lazy"
                          alt=""
                          class="home-comparison_list-icon"
                        />
                        <p class="home-comparison_list-item-text">
                          <span class="text-weight-semibold"
                            >Stop prioritizing.</span
                          >
                          Calendarify automatically prioritizes work.
                        </p>
                      </div>
                     
                      <div class="home-comparison_list-item">
                        <img
                          src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65eb8056e842ab4a2619255b_blue-check-gradient.svg"
                          loading="lazy"
                          alt=""
                          class="home-comparison_list-icon"
                        />
                        <p class="home-comparison_list-item-text">
                          <span class="text-weight-semibold">Relax.</span>
                          Calendarify’s got your back.
                        </p>
                      </div>
                      <div class="home-comparison_list-item">
                        <img
                          src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65eb8056e842ab4a2619255b_blue-check-gradient.svg"
                          loading="lazy"
                          alt=""
                          class="home-comparison_list-icon"
                        />
                        <p class="home-comparison_list-item-text">
                          <span class="text-weight-semibold">Enjoy life.</span>
                          Calendarify protects your weekends.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="margin-top margin-large">
                <div class="cta-button_container cta-button_container-center">
                  <a
                    href="/login"
                    class="button cta-button-v1 w-button"
                    >Upload Your Calendar</a
                  ><a
                    id="checkout-survey-button"
                    data-w-id="1fbbc89a-1ade-4636-2c4b-773a4d4aa04a"
                    href="/login"
                    class="button open-team-member-modal w-button"
                    >Upload Your Calendar</a
                  >
                  <div class="margin-top margin-small">
                    <div class="text-style-muted">
                      <span class="trial-text">Integrated with HealthAI App</span>.
                     Start now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lp-v1">
          <div id="lp-individual">
            <div class="section-lp-big-title">
              <div class="lp-wrapper">
                <div class="lp-big-title-container">
        
                  <div class="lp-big-title-subtitle">
                    Too much to do? Too little time?
                  </div>
                  <div class="lp-big-title-heading blue-gradient-text-color">
                    Meet your AI assistant
                  </div>
                </div>
              </div>
            </div>
            <div class="section-lp-task-scheduling">
              <div class="lp-wrapper task-scheduling">
                <img
                  src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0f2b5f0767cec14223355_task-scheduling.png"
                  loading="lazy"
                  id="w-node-_0f670b69-00cf-7b1c-6a48-924a3d426ffc-84bdf3a2"
                  sizes="(max-width: 991px) 100vw, (max-width: 1919px) 99vw, 1452px"
                  alt=""
                  srcset="
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0f2b5f0767cec14223355_task-scheduling-p-500.webp  500w,
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0f2b5f0767cec14223355_task-scheduling-p-800.webp  800w,
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0f2b5f0767cec14223355_task-scheduling-p-1080.png 1080w,
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0f2b5f0767cec14223355_task-scheduling-p-1600.png 1600w,
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0f2b5f0767cec14223355_task-scheduling-p-2000.png 2000w,
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0f2b5f0767cec14223355_task-scheduling-p-2600.png 2600w,
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0f2b5f0767cec14223355_task-scheduling-p-3200.png 3200w,
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0f2b5f0767cec14223355_task-scheduling.png        3684w
                  "
                  class="lp-task-scheduling-image"
                />
                <div
                  id="w-node-_0f670b69-00cf-7b1c-6a48-924a3d426ffd-84bdf3a2"
                  class="lp-feature-content"
                >
                  <div class="margin-bottom margin-small">
                    <div class="lp-subtitle blue-gradient-text-color">
                      Task scheduling
                    </div>
                  </div>
                  <h2 class="lp-feature-title">
                    Get a personalized schedule each day, without manual
                    planning
                  </h2>
                  <div class="margin-bottom margin-medium">
                    <div class="lp-subtext">
                      Calendarify takes all of your projects and tasks, prioritizes
                      and timeblocks them on your calendar, and dynamically
                      optimizes your schedule dozens of times a day, all done
                      automatically. Your plan will always be perfect and
                      up-to-date.
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div class="section-lp-task-prioritization flex-center">
              <div class="lp-wrapper center-flex">
                <div class="lp-feature-content center-full-width">
                  <div class="margin-bottom margin-small">
                    <div class="lp-subtitle blue-gradient-text-color">
                      Task prioritization
                    </div>
                  </div>
                  <h2 class="lp-feature-title">
                    <nav id="tracingbeam"></nav>
                    Always know exactly what to work on next
                  </h2>
                  <div class="margin-bottom margin-medium">
                    <div class="lp-subtext">
                      Calendarify will always tell you what’s the best task to work
                      on at any moment, by computing across all your projects
                      &amp; tasks, their deadlines, priorities,
                      dependencies...etc
                    </div>
                  </div>
                 
                </div>
              </div>
              <div class="lp-animation-full-width _100-width no-shadow">
                <img
                  src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e946e05bc6c00f9cc8fb9c_task-prio-anim-img.png"
                  loading="lazy"
                  sizes="100vw"
                  srcset="
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e946e05bc6c00f9cc8fb9c_task-prio-anim-img-p-500.png   500w,
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e946e05bc6c00f9cc8fb9c_task-prio-anim-img-p-800.png   800w,
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e946e05bc6c00f9cc8fb9c_task-prio-anim-img-p-1080.png 1080w,
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e946e05bc6c00f9cc8fb9c_task-prio-anim-img-p-1600.png 1600w,
                    https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e946e05bc6c00f9cc8fb9c_task-prio-anim-img.png        1920w
                  "
                  alt=""
                  class="lp-animation-full-width-image"
                />
                <div class="lp-full-width-animation-embed w-embed">
                  <div
                    style="width: 100%; height: 100%"
                    class="w-background-video w-background-video-atom"
                  >
                    <video
                      playsinline
                      loop
                      muted
                      autoplay=""
                      loop=""
                      muted=""
                      playsinline=""
                      data-wf-ignore="true"
                      data-object-fit="cover"
                      class="inlinevideo"
                    >
                      <source
                        src="https://s3.amazonaws.com/webflow-prod-assets/5fcb349058268443b1f5dbdb/65f86493f6746428573cb331_anim-2.mp4"
                        data-wf-ignore="true"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div class="section-lp-project-management">
              <div class="lp-wrapper project-management">
                <div class="lp-feature-content project-management">
                  <div class="margin-bottom margin-small">
                    <div class="lp-subtitle blue-gradient-text-color">
                      Project management
                    </div>
                  </div>
                  <h2 class="lp-feature-title">
                    Turn overwhelming task lists into a concrete plan,
                    automatically
                  </h2>
                  <div class="margin-bottom margin-medium">
                    <div class="lp-subtext">
                      Calendarify gives you everything you need to organize
                      complicated projects, and then uses AI to turn hundreds of
                      tasks into an optimized plan, so that you can just focus
                      on executing instead of worrying about planning and
                      deadlines.
                    </div>
                  </div>
                 
                </div>
                <div
                  id="w-node-_0f670b69-00cf-7b1c-6a48-924a3d42701d-84bdf3a2"
                  class="project-management-image-container"
                >
                  <img
                    src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e9491e331ecdd1f530c2a0_project-management-illu-2-min.png"
                    loading="lazy"
                    sizes="(max-width: 991px) 100vw, (max-width: 1439px) 63vw, (max-width: 1919px) 72vw, 1116px"
                    srcset="
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e9491e331ecdd1f530c2a0_project-management-illu-2-min-p-500.png   500w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e9491e331ecdd1f530c2a0_project-management-illu-2-min-p-800.png   800w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e9491e331ecdd1f530c2a0_project-management-illu-2-min-p-1080.png 1080w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e9491e331ecdd1f530c2a0_project-management-illu-2-min-p-1600.png 1600w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e9491e331ecdd1f530c2a0_project-management-illu-2-min-p-2000.png 2000w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e9491e331ecdd1f530c2a0_project-management-illu-2-min-p-2600.png 2600w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e9491e331ecdd1f530c2a0_project-management-illu-2-min.png        3260w
                    "
                    alt=""
                    class="project-management-image"
                  /><img
                    src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0adfd65614c731ff49a8a_project-management-hover.webp"
                    loading="lazy"
                    data-w-id="0f670b69-00cf-7b1c-6a48-924a3d42701f"
                    sizes="(max-width: 991px) 100vw, (max-width: 1279px) 54vw, (max-width: 1919px) 55vw, 992px"
                    alt=""
                    srcset="
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0adfd65614c731ff49a8a_project-management-hover-p-500.png   500w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0adfd65614c731ff49a8a_project-management-hover-p-800.png   800w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0adfd65614c731ff49a8a_project-management-hover-p-1080.png 1080w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0adfd65614c731ff49a8a_project-management-hover-p-1600.png 1600w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0adfd65614c731ff49a8a_project-management-hover-p-2000.png 2000w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0adfd65614c731ff49a8a_project-management-hover.webp       2207w
                    "
                    class="project-management-hover-image"
                  />
                </div>
              </div>
            </div>
            
                  
                 
                  </div>
                  <div class="lp-happiness-algorithm-bottom">
                    <div
                      id="w-node-_1df16581-d47d-5dbc-4591-eaa7dcbf2083-84bdf3a2"
                      class="lp-happiness-algorithm-card"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e94b7a65379af997d1f3d9_lp-check-blue.svg"
                        loading="lazy"
                        alt=""
                      />
                      <div class="heading-xsmall">Feel accomplished</div>
                      <p>
                        The algorithm automatically prioritizes work that&#x27;s
                        most important to you.
                      </p>
                    </div>
                    <div
                      id="w-node-f859c575-e64c-8a08-a914-e8e114e9e949-84bdf3a2"
                      class="lp-happiness-algorithm-card"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e94b7a65379af997d1f3d9_lp-check-blue.svg"
                        loading="lazy"
                        alt=""
                      />
                      <div class="heading-xsmall">Get serious stuff done.</div>
                      <p>
                        Complete the challenging, meaningful work you&#x27;ve
                        been putting off with an algorithm that doesn&#x27;t let
                        you avoid the tough but important stuff.
                      </p>
                    </div>
                    <div class="lp-happiness-algorithm-card">
                      <img
                        src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e94b7a65379af997d1f3d9_lp-check-blue.svg"
                        loading="lazy"
                        alt=""
                      />
                      <div class="heading-xsmall">Relax and sleep better.</div>
                      <p>
                        Feel confident Calendarify’s tracking everything for you. The
                        algorithm ensures nothing slips through the cracks.
                      </p>
                    </div>
                  </div>
                  <div class="center-flex z-index-4">
                    
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e10774dfbc8821f3bd8709_lp-bottom-gradient.webp"
                loading="lazy"
                sizes="100vw"
                srcset="
                  https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e10774dfbc8821f3bd8709_lp-bottom-gradient-p-500.webp   500w,
                  https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e10774dfbc8821f3bd8709_lp-bottom-gradient-p-800.png    800w,
                  https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e10774dfbc8821f3bd8709_lp-bottom-gradient-p-1080.png  1080w,
                  https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e10774dfbc8821f3bd8709_lp-bottom-gradient-p-1600.webp 1600w,
                  https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e10774dfbc8821f3bd8709_lp-bottom-gradient-p-2000.webp 2000w,
                  https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e10774dfbc8821f3bd8709_lp-bottom-gradient-p-2600.png  2600w,
                  https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e10774dfbc8821f3bd8709_lp-bottom-gradient.webp        2880w
                "
                alt=""
                class="bottom-gradient"
              />
            </div>
            <div class="section-lp-deadline-tracking lp-4">
              <div class="lp-wrapper deadline-tracking-wrapper">
                <div class="lp-feature-content center-full-width">
                  <div class="margin-bottom margin-small">
                    <div class="lp-subtitle blue-gradient-text-color">
                      Deadline tracking
                    </div>
                  </div>
                  <h2 class="lp-feature-title">Never miss a deadline</h2>
                  <div class="margin-bottom margin-medium">
                    <div class="lp-subtext">
                      Calendarify will proactively alert you when things might miss
                      deadline - even for tasks not due until weeks later.
                      Calendarify AI has this kind of prediction power because its
                      intelligence understands everything else on your plate.
                    </div>
                  </div>
                  
                </div>
                <div class="deadline-tracking-image-container">
                  <img
                    src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0b8fe4171c11deca81099_deadline-tracking-gradient.webp"
                    loading="lazy"
                    sizes="(max-width: 991px) 90vw, 800px"
                    srcset="
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0b8fe4171c11deca81099_deadline-tracking-gradient-p-500.png   500w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0b8fe4171c11deca81099_deadline-tracking-gradient-p-800.png   800w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0b8fe4171c11deca81099_deadline-tracking-gradient-p-1080.png 1080w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0b8fe4171c11deca81099_deadline-tracking-gradient-p-1600.png 1600w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0b8fe4171c11deca81099_deadline-tracking-gradient.webp       1929w
                    "
                    alt=""
                    class="deadline-tracking-gradient"
                  /><img
                    src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0b8a33a0679e96ee2fff9_deadline-tracking-image.webp"
                    loading="lazy"
                    sizes="(max-width: 991px) 90vw, 800px"
                    srcset="
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0b8a33a0679e96ee2fff9_deadline-tracking-image-p-500.png  500w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0b8a33a0679e96ee2fff9_deadline-tracking-image-p-800.png  800w,
                      https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0b8a33a0679e96ee2fff9_deadline-tracking-image.webp      1574w
                    "
                    alt=""
                    class="deadline-tracking-image"
                  />
                </div>
              </div>
            </div>
            <div class="section-lp-calendar-syncing">
              <div class="lp-wrapper calendar-sync">
                <div
                  id="w-node-_0f670b69-00cf-7b1c-6a48-924a3d427028-84bdf3a2"
                  class="lp-feature-content calendar-sync"
                >
                  <div class="margin-bottom margin-small">
                    <div class="lp-subtitle blue-gradient-text-color">
                      Calendar syncing
                    </div>
                  </div>
                  <h2 class="lp-feature-title">Easy Export to Your Favorite Calendar App
<span>🗓️</span></h2>
                  <div class="margin-bottom margin-medium">
                    <div class="lp-subtext">
                      Effortlessly sync your schedule with Google Calendar or Outlook in few clicks! <span>🔄</span>
                    </div>
                  </div>
                  <div class="lp-calendar-sync-items-container">
                    <div class="lp-calendar-sync-item">
                      <img
                        src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/6442eba7515652336984b0ec_google-calendar-icon.svg"
                        loading="lazy"
                        alt=""
                        class="lp-calendar-sync-item-img"
                      />
                      <div class="lp-subtext">Google Calendar</div>
                    </div>
                    <div class="lp-calendar-sync-item">
                      <img
                        src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/6442ecc2874cc46ea9ff675c_microsoft-outlook-icon.svg"
                        loading="lazy"
                        alt=""
                        class="lp-calendar-sync-item-img"
                      />
                      <div class="lp-subtext">Outlook Calendar</div>
                    </div>
                    <div class="lp-calendar-sync-item">
                      <img
                        src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/65e0c500f6fc51aac3647761_apple-cal.webp"
                        loading="lazy"
                        alt=""
                        class="lp-calendar-sync-item-img"
                      />
                      <div class="lp-subtext">Apple Calendar (iCloud)</div>
                    </div>
                  </div>
                  </div>
                  <a
                    href="/login"
                    class="button cta-button-v1 w-button"
                    >Upload Your Calendar</a
                  ><a
                    id="checkout-survey-button"
                    data-w-id="1fbbc89a-1ade-4636-2c4b-773a4d4aa04a"
                    href="/login"
                    class="button open-team-member-modal w-button"
                    >Upload Your Calendar</a
                  >
                </div>
                
              
                </div>
              </div>
            </div>
          </div>
          <div class="footer__section lp-footer">
            <div class="_1100px-wrapper footer-wrapper">
              <a href="/m" class="w-inline-block"
                ><img
                  src="calendarify (5).png"
                  loading="lazy"
                  alt=""
                  class="footer-logo"
              /></a>
              <div class="row footer-menu-row">
  
                <a href="/about" class="footer-link-6 lp-footer-link">About</a>
            
                <a
                  href="https://github.com/Danielmark001"
                  class="footer-link-6 lp-footer-link"
                  >GitHub Repo</a
                
              
                ><a href="https://privacypolicycalendarify.vercel.app/" class="footer-link-6 lp-footer-link"
                  >Privacy</a
                ><a href="https://privacypolicycalendarify.vercel.app/" class="footer-link-6 lp-footer-link">Terms</a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="email-modal-bg"
      data-w-id="2d53565d-c8c0-5474-5ff6-abbb910fe898"
      class="modal-overlay-bg"
    >
      <div data-w-id="954a1c09-8c5a-10aa-d48a-a2ced7747f18" class="modal">
        <div class="display-heading">Welcome to Calendarify!</div>
        <div class="mobile-confirm-modal-text">
          <div>
            Please confirm the email <span class="email-span">test</span> is
            correct (no typos).
          </div>
        </div>
        <a id="email-modal-confirm" href="#" class="button w-button">Confirm</a>
        <div class="spacer-16"></div>
        <a
          id="email-modal-close"
          data-w-id="c21c7704-4aa4-d71a-c4c0-d0d152fefd7a"
          href="#"
          class="button primary-muted w-button"
          >Change email</a
        >
        <div class="margin-top margin-medium">
          <div class="text-align-center">
            <p>
              By signing up, you agree to our
              <a
                target="_blank"
                href="https://calendarify-ntu.vercel.app/terms"
                class="blue-gradient-text-color"
                >Terms of Service</a
              >
              and
              <a
                target="_blank"
                href="https://calendarify-ntu.vercel.app/privacy"
                class="blue-gradient-text-color"
                >Privacy Policy</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      id="enterpise-qualify-modal"
      class="modal-overlay-bg enterprise-survey"
    >
      <div class="modal centered enterprise-survey">
        <div class="margin-bottom margin-small">
          <div class="heading-small">
            How many team members do you plan to have using Calendarify over the next
            6 months?
          </div>
        </div>
        <div class="margin-bottom margin-small w-form">
          <form
            id="team-member-form"
            name="wf-form-Team-Members-Form"
            data-name="Team Members Form"
            method="post"
            data-wf-page-id="65eb7dd97ab78afe84bdf3a2"
            data-wf-element-id="8aae9f50-b269-a403-5d34-675d14ad08b1"
          >
            <div class="radio-button-button-row">
              <label class="radio-button-field w-radio"
                ><div
                  class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"
                ></div>
                <input
                  type="radio"
                  name="team-members"
                  id="individual"
                  data-name="team-members"
                  required=""
                  style="opacity: 0; position: absolute; z-index: -1"
                  value="individual"
                /><span class="radio-button-label w-form-label" for="individual"
                  >Just me</span
                ></label
              ><label class="radio-button-field w-radio"
                ><div
                  class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"
                ></div>
                <input
                  type="radio"
                  name="team-members"
                  id="team"
                  data-name="team-members"
                  required=""
                  style="opacity: 0; position: absolute; z-index: -1"
                  value="team"
                /><span class="radio-button-label w-form-label" for="team"
                  >Between 2 and 20</span
                ></label
              ><label class="radio-button-field w-radio"
                ><div
                  class="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"
                ></div>
                <input
                  type="radio"
                  name="team-members"
                  id="enterprise"
                  data-name="team-members"
                  required=""
                  style="opacity: 0; position: absolute; z-index: -1"
                  value="enterprise"
                /><span class="radio-button-label w-form-label" for="enterprise"
                  >More than 20</span
                ></label
              >
            </div>
            <input
              type="submit"
              data-wait="Please wait..."
              id="enterprise-survey-confirm"
              class="button max-width-full w-button"
              value="Submit"
            />
          </form>
          <div class="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div class="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <a
          href="#"
          id="team-member-modal-close"
          data-w-id="8aae9f50-b269-a403-5d34-675d14ad08c8"
          class="button primary-muted w-button"
          >Go back</a
        >
      </div>
    </div>
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      class="navbar-2 w-nav"
    >
      <div class="container-3 w-container">
        <a href="#" class="w-nav-brand"
          ><div class="motion-nav-bound">
            <img
              src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/5fcb34905826841d27f5dc75_Motion%20logo%20new%20256px.png"
              width="40"
              height="40"
              alt=""
              class="logo-image m-nav"
            />
            <div class="logo-text m-nav">Calendarify</div>
          </div></a
        >
        <div class="menu-button-2 w-nav-button">
          <div class="icon-2 w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      class="navbar-2 w-nav"
    >
      <div class="container-3 w-container">
        <a href="#" class="w-nav-brand"
          ><div class="motion-nav-bound">
            <img
              src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/5fcb34905826841d27f5dc75_Motion%20logo%20new%20256px.png"
              width="40"
              height="40"
              alt=""
              class="logo-image m-nav"
            />
            <div class="logo-text m-nav">Calendarify</div>
          </div></a
        >
        <div class="menu-button-2 w-nav-button">
          <div class="icon-2 w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
    <script
      src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5fcb349058268443b1f5dbdb"
      type="text/javascript"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.prod.website-files.com/5fcb349058268443b1f5dbdb/js/motion-dev.f4c3e121b.js"
      type="text/javascript"
    ></script>
    <script>
      function logPage() {
        if (window.location.pathname.includes("/signup-iframes")) {
          return;
        }
        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        const cookies = document.cookie
          .split(";")
          .map((cookie) => cookie.split("="))
          .reduce(
            (accumulator, [key, value]) => ({
              ...accumulator,
              [key.trim()]: decodeURIComponent(value),
            }),
            {}
          );

        const mot_session = cookies["mot_session"] || "";
        let fbclid = params.get("fbclid");
        const gclid = params.get("gclid");
        const ttclid = params.get("ttclid");
        const irclickid = params.get("irclickid");
        if (fbclid) {
          document.cookie = `mot_fbclid=${fbclid};domain=calendarify-ntu.vercel.app`;
        } else {
          const fbclick = cookies._fbc;
          if (cookies._fbc) {
            fbclid = cookies._fbc.slice(19);
            document.cookie = `mot_fbclid=${fbclid};domain=calendarify-ntu.vercel.app`;
          }
        }
        if (gclid) {
          document.cookie = `mot_gclid=${gclid};domain=calendarify-ntu.vercel.app`;
        }
        if (ttclid) {
          document.cookie = `mot_ttclid=${ttclid};domain=calendarify-ntu.vercel.app`;
        }
        if (irclickid) {
          document.cookie = `irclickid=${irclickid};domain=calendarify-ntu.vercel.app`;
        }

        const paramObj = { mot_session, userAgent: window.navigator.userAgent };

        if (queryString.includes("utm") || queryString.includes("clid")) {
          params.forEach((value, key) => (paramObj[key] = value));
          if (fbclid) {
            paramObj["fbclid"] = fbclid;
          }
        }
        window.analytics.page(paramObj);
      }
      logPage();
    </script>
    <script>
      window.addEventListener("load", function () {
        setTimeout(function () {
          const perf = performance.getEntriesByType("navigation")[0];
          window.analytics.track("Landing Page Load Time", {
            durationMs: Math.round(perf.duration),
            domInteractiveMs: Math.round(perf.domInteractive),
            url: window.location.href,
            path: window.location.pathname,
          });
        }, 0);
      });
    </script>

    <!--open enterprise survey modal-->
    <script>
      $(document).ready(function () {
        var teamMemberForm = document.getElementById("team-member-form");

        teamMemberForm.addEventListener("submit", function (event) {
          event.preventDefault();
          var formData = new FormData(teamMemberForm);
          var selection = formData.get("team-members");
          if (selection) {
            window.analytics.track("WEBFLOW_PLAN_SURVEY_SELECTION", {
              selection,
            });
            document.cookie = `survey_selection=${selection}; SameSite=Lax; domain=.calendarify-ntu.vercel.app; Secure`;
    
          }
          window.location.href = "/checkout";
        });
      });
    </script>


    <script src="https://unpkg.com/@amplitude/experiment-js-client@1.9.0/dist/experiment.umd.js"></script>
    <script>
      function trackButtonClick() {
        window.analytics.track("WEBFLOW_TRY_MOTION_BUTTON_CLICKED");
      }

      const surveyButtons = document.querySelectorAll(
        ".open-team-member-modal"
      );
      surveyButtons.forEach((surveyButton) => {
        surveyButton.addEventListener("click", trackButtonClick);
      });

      function overrideSurveyModal(event) {
        event.stopImmediatePropagation();
      }

      const applyTransformation = (showSurvey) => {
        const surveyButtons = document.querySelectorAll(
          ".open-team-member-modal"
        );
        surveyButtons.forEach((surveyButton) => {
          if (showSurvey) {
            surveyButton.href = "#";
            surveyButton.removeEventListener("click", overrideSurveyModal);
          } else {
            surveyButton.addEventListener("click", overrideSurveyModal);
          }
        });
      };

      function runExperiment() {
        const deploymentKey =
          window.location.hostname === "calendarify-ntu.vercel.app"
            ? "client-rca2Pg6wM1yTHV9YYIPkdj2Jv3ZQArMx"
            : "client-T69rMXb14Cd9tZfcvK8BeSmUZp1MYIpg";
        const setupExperimentPoll = setInterval(() => {
          if (window.analytics?.user?.().anonymousId()) {
            clearInterval(setupExperimentPoll);
            window.experiment =
              Experiment.Experiment.initializeWithAmplitudeAnalytics(
                deploymentKey,
                {
                  serverUrl: "https://amplitudelab.calendarify-ntu.vercel.app",
                  automaticExposureTracking: false,
                  userProvider: {
                    getUser: () => ({
                      user_id: window.analytics.user().id(),
                      device_id: window.analytics.user().anonymousId(),
                    }),
                  },
                  exposureTrackingProvider: {
                    track: (exposure) => {
                      window.analytics?.track("$exposure", exposure);
                    },
                  },
                }
              );
            window.experiment.fetch().then(() => {
              const data = window.experiment.all();
              const experimentKey = "revert-signup-order";
              const test = data[experimentKey];
              if (test && test.value && test.value.includes("treatment")) {
                applyTransformation(true);
              } else {
                applyTransformation(false);
              }
              window.experiment.exposure(experimentKey);
            });
          }
        }, 250);
        setTimeout(() => {
          clearInterval(setupExperimentPoll);
        }, 3000);
      }
      runExperiment();
    </script>
    <!-- F’in sweet Webflow Hacks -->
    <script>
      // on form submit
      $(".hero-mobile-form").submit(() => {
        var email = $("#email").val().toLowerCase().trim();
        if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          )
        ) {
          return;
        }
        window.analytics.identify(email);
        window.analytics.track("LANDING_SUBMIT_EMAIL");

        // click our div trigger to run our Webflow Interaction
        $(".hero-mobile-form-success-trigger").click();

        $(".email-span").text(email);

        $("body").css("overflow", "hidden");
      });

      Webflow.push(function () {
        $("#email-modal-confirm").click(function (e) {
          e.preventDefault();

          var email = $(".email-span").text();
          code = encodeURIComponent(btoa(email));
          window.location.href = `/login?e=${code}`;
        });

        $("#email-modal-close").click(function (e) {
          e.preventDefault();
          $("body").css("overflow", "auto");
        });
      });
    </script>

    <script>
      $(function () {
        /*** START SCRIPT CONFIG ***/

        // Replace with value for your form. ie. "#your-form-id" or ".your-form-class"
        var FORM_SELECTOR = "#email-form";

        // Do you want to hide the success message after the form is submitted?
        var HIDE_SUCCESS_MESSAGE = false;

        // Do you want the success message to show above the form?
        var SUCCESS_MESSAGE_ABOVE_FORM = true;

        /*** END SCRIPT CONFIG ***/

        var resetCustomElement = function (customElement) {
          var inputElement = customElement.nextSibling;
          if (inputElement.checked) {
            customElement.classList.add("w--redirected-checked");
          } else {
            customElement.classList.remove("w--redirected-checked");
          }
        };

        var resetForm = function (form, successDiv) {
          // Reset the inputs in the form
          form.reset();

          // Reset custom checkboxes
          document
            .querySelectorAll(".w-checkbox-input--inputType-custom")
            .forEach(resetCustomElement);

          // Reset custom radio buttons
          document
            .querySelectorAll(".w-form-formradioinput--inputType-custom")
            .forEach(resetCustomElement);

          // Show the form
          form.style.display = "block";

          // Hide Success Message
          //if (HIDE_SUCCESS_MESSAGE) {
          successDiv.style.display = "none";
          //}
        };

        var form = document.querySelector(FORM_SELECTOR);
        var successDiv = form.nextSibling;
        if (!HIDE_SUCCESS_MESSAGE && SUCCESS_MESSAGE_ABOVE_FORM) {
          // Move the form last so that the success message appears before it
          form.parentElement.appendChild(form);
        }

        // Create an observer to run our resetForm function when Webflow hides our form after submission
        var observer = new MutationObserver(function (mutations) {
          if (form.style.display === "none") {
            resetForm(form, successDiv);
          }
        });

        // Listen for when the style attribute of our form changes
        observer.observe(form, {
          attributes: true,
          attributeFilter: ["style"],
        });
      });
    </script>



    <script>
      window.EMBED_SO_CONFIG = {
        id: "67d34374-8306-437b-9656-2422f0924d7d",
        position: "right",
      };
    </script>
    <script src="https://embed.so/js/build.js" async defer></script>

    <!--click to go to sections-->
    <script>
      $(document).ready(function () {
        $("#individual-click").click(function (event) {
          event.preventDefault();
          $("#lp-individual")[0].scrollIntoView({
            behavior: "smooth", // or "auto" or "instant"
            block: "start", // or "end"
          });
        });
        $("#team-click").click(function (event) {
          event.preventDefault();
          $("#lp-team")[0].scrollIntoView({
            behavior: "auto", // or "auto" or "instant"
            block: "start", // or "end"
          });
        });
      });
    </script>

    
