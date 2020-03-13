report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Visual_Regression_Testing_Sample_0_document_0_phone.png",
        "test": "../bitmaps_test/20200313-103234/backstop_default_Visual_Regression_Testing_Sample_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Visual_Regression_Testing_Sample_0_document_0_phone.png",
        "label": "Visual Regression Testing Sample",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4200",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.94",
          "analysisTime": 16
        },
        "diffImage": "../bitmaps_test/20200313-103234/failed_diff_backstop_default_Visual_Regression_Testing_Sample_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Visual_Regression_Testing_Sample_0_document_1_tablet.png",
        "test": "../bitmaps_test/20200313-103234/backstop_default_Visual_Regression_Testing_Sample_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Visual_Regression_Testing_Sample_0_document_1_tablet.png",
        "label": "Visual Regression Testing Sample",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:4200",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.78",
          "analysisTime": 37
        },
        "diffImage": "../bitmaps_test/20200313-103234/failed_diff_backstop_default_Visual_Regression_Testing_Sample_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});