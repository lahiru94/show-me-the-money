export const mockXeroValidData = {
    "ReportID": "BalanceSheet",
    "ReportName": "Balance Sheet",
    "ReportType": "BalanceSheet",
    "ReportTitles": [
        "Balance Sheet",
        "Demo Org",
        "As at 10 February 2025"
    ],
    "ReportDate": "10 February 2025",
    "UpdatedDateUTC": "/Date(1739159843063)/",
    "Fields": [],
    "Rows": [
        {
            "RowType": "Header",
            "Cells": [
                {
                    "Value": ""
                },
                {
                    "Value": "10 February 2025"
                },
                {
                    "Value": "11 February 2024"
                }
            ]
        },
        {
            "RowType": "Section",
            "Title": "Assets",
            "Rows": []
        },
        {
            "RowType": "Section",
            "Title": "Bank",
            "Rows": [
                {
                    "RowType": "Row",
                    "Cells": [
                        {
                            "Value": "My Bank Account",
                            "Attributes": [
                                {
                                    "Value": "d2e3044e-2fb8-42fa-be17-64c8956d5f57",
                                    "Id": "account"
                                }
                            ]
                        },
                        {
                            "Value": "126.70",
                            "Attributes": [
                                {
                                    "Value": "d2e3044e-2fb8-42fa-be17-64c8956d5f57",
                                    "Id": "account"
                                }
                            ]
                        },
                        {
                            "Value": "99.60",
                            "Attributes": [
                                {
                                    "Value": "d2e3044e-2fb8-42fa-be17-64c8956d5f57",
                                    "Id": "account"
                                }
                            ]
                        }
                    ]
                },
                {
                    "RowType": "Row",
                    "Cells": [
                        {
                            "Value": "Sample Business",
                            "Attributes": [
                                {
                                    "Value": "84110043-a296-4fb0-aa97-34a45a5d9fc5",
                                    "Id": "account"
                                }
                            ]
                        },
                        {
                            "Value": "92911.00",
                            "Attributes": [
                                {
                                    "Value": "84110043-a296-4fb0-aa97-34a45a5d9fc5",
                                    "Id": "account"
                                }
                            ]
                        },
                        {
                            "Value": "92911.00",
                            "Attributes": [
                                {
                                    "Value": "84110043-a296-4fb0-aa97-34a45a5d9fc5",
                                    "Id": "account"
                                }
                            ]
                        }
                    ]
                },
                {
                    "RowType": "Row",
                    "Cells": [
                        {
                            "Value": "Sample Business 1",
                            "Attributes": [
                                {
                                    "Value": "38c1c989-0b15-4203-854f-49682610d56a",
                                    "Id": "account"
                                }
                            ]
                        },
                        {
                            "Value": "11039.00",
                            "Attributes": [
                                {
                                    "Value": "38c1c989-0b15-4203-854f-49682610d56a",
                                    "Id": "account"
                                }
                            ]
                        },
                        {
                            "Value": "11039.00",
                            "Attributes": [
                                {
                                    "Value": "38c1c989-0b15-4203-854f-49682610d56a",
                                    "Id": "account"
                                }
                            ]
                        }
                    ]
                },
                {
                    "RowType": "SummaryRow",
                    "Cells": [
                        {
                            "Value": "Total Bank"
                        },
                        {
                            "Value": "104076.70"
                        },
                        {
                            "Value": "104049.60"
                        }
                    ]
                }
            ]
        },
    ]
}

export const mockValidConvertedData = {
    "reportTitle": "Balance Sheet - Demo Org - As at 10 February 2025",
    "headerRow": {
        "cells": [
            { "value": "" },
            { "value": "10 February 2025" },
            { "value": "11 February 2024" }
        ]
    },
    "bodyRows": [
        {
            "rowType": "MAIN_SECTION_ROW",
            "cells": [
                {
                    "value": "Assets"
                }
            ],
            "key": "Assetstitle row"
        },
        {
            "rowType": "SUB_SECTION_ROW",
            "cells": [
                {
                    "value": "Bank"
                }
            ],
            "key": "Banktitle row"
        },
        {
            "rowType": "ROW",
            "cells": [
                {
                    "value": "My Bank Account"
                },
                {
                    "value": "126.70"
                },
                {
                    "value": "99.60"
                }
            ],
            "key": "BankMy Bank Account"
        },
        {
            "rowType": "ROW",
            "cells": [
                {
                    "value": "Sample Business"
                },
                {
                    "value": "92911.00"
                },
                {
                    "value": "92911.00"
                }
            ],
            "key": "BankSample Business"
        },
        {
            "rowType": "ROW",
            "cells": [
                {
                    "value": "Sample Business 1"
                },
                {
                    "value": "11039.00"
                },
                {
                    "value": "11039.00"
                }
            ],
            "key": "BankSample Business 1"
        },
        {
            "rowType": "SUMMARY_ROW",
            "cells": [
                {
                    "value": "Total Bank"
                },
                {
                    "value": "104076.70"
                },
                {
                    "value": "104049.60"
                }
            ],
            "key": "BankTotal Bank"
        },  
    ]
}
