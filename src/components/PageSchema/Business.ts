export let BusinessSchema = [
  {
    Section1: [
      {
        Heading: "Business Page",
        Parent: "row",
        child: [
          {
            type: "file",
            name: "PageBanner",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "PageName",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "text",
            name: "BannerTitle",
            className: "col-12 mt-3 form-control",
          },
          {
            type: "Area",
            name: "BannerDesc",
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
        Heading: "Middle Content",
        Parent: "row",
        child: [
          {
            type: "Area",
            name: "MidContent",
            className: "col-12 mt-3 form-control ",
          },
          {
            type: "Area",
            name: "MidContentDesc",
            className: "col-12 mt-3 form-control ",
          },
        ],
      },
    ],
    Section3: [
      {
        Heading: "Business SnapShots",
        Parent: "row",
        child: [
          {
            type: "text",
            name: "MainHeading",
            className: "col-12 mt-3 form-control ",
          },
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
  },
];
