export let SupplySchema = [
  {
    Section1: [
      {
        Heading: "Upload Supply Slides",
        Parent: "row",
        child: [
          {
            type: "file",
            name: "Slide1",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "Slide2",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "file",
            name: "Slide3",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "file",
            name: "Slide4",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "file",
            name: "Slide5",
            className: "col-12 mt-3 form-control",
          },
        ],
        btnContainer: "col-3 mt-4",
        btnClass: "btn",
        btnContent: "Submit",
        Btnstyle: { background: "blue", color: "white" },
      },
    ],
    Section2: [
      {
        Heading: "About us",
        Parent: "row",
        child: [
          {
            type: "file",
            name: "MainImage",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "minImage1",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "file",
            name: "minImage2",
            className: "col-12 mt-3 form-control",
          },

          {
            type: "text",
            name: "mainHeading",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Heading",
          },
          {
            type: "Area",
            name: "Main Description",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Description",
          },
          {
            type: "text",
            name: "Sub Heading 1",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Description",
          },
          {
            type: "Area",
            name: "Sub Heading 1 Description ",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Description",
          },
          {
            type: "text",
            name: "Sub Heading 2",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Description",
          },
          {
            type: "Area",
            name: "Sub Heading 2 Description ",
            className: "col-12 mt-3 form-control",
            placeholder: "Main Description",
          },
        ],

        btnContainer: "col-3 mt-4",
        btnClass: "btn",
        btnContent: "Submit",
        Btnstyle: { background: "blue", color: "white" },
      },
    ],
    Section3: [
      {
        Heading: "Business Section",
        Parent: "row",
        child: [
          {
            type: "text",
            name: "mainHeading",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "SubHeading",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "BusinessSlide1",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "BusinessSlideContent",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "BusinessSlide2",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "text",
            name: "BusinessSlideContent",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "BusinessSlide3",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "text",
            name: "BusinessSlideContent",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "BusinessSlide4",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "text",
            name: "BusinessSlideContent",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "file",
            name: "BusinessSlide5",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "text",
            name: "BusinessSlideContent",
            className: "col-12 mt-3 form-control ",
          },
        ],
        btnContainer: "col-3 mt-4",
        btnClass: "btn",
        btnContent: "Submit",
        Btnstyle: { background: "blue", color: "white" },
      },
    ],
    Section4: [
      {
        Heading: "Humble Section",
        Parent: "row",
        child: [
          {
            type: "Area",
            name: "HumbleSection",
            className: "col-12 mt-3 form-control ",
            placeholder: "HumbleSection",
          },
          {
            type: "Area",
            name: "HumbleSubSection",
            className: "col-12 mt-3 form-control",
            placeholder: "HumbleSubSection",
          },
          {
            type: "Area",
            name: "HumbleFinalSection",
            className: "col-12 mt-3 form-control",
            placeholder: "HumbleFinalSection",
          },
          {
            type: "file",
            name: "HumbleLogo",
            className: "col-12 mt-3 form-control",
          },
        ],
        btnContainer: "col-3 mt-4",
        btnClass: "btn",
        btnContent: "Submit",
        Btnstyle: { background: "blue", color: "white" },
      },
    ],
  },
];
