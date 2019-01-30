const yaml = require('node-yaml');
const fs = require('fs');
const join = require('path').join;


let jsonFiles = [];

// 处理所有的目录结构存放到jsonFiles
function getJsonFiles(jsonPath){
  function findJsonFile(path){
      let files = fs.readdirSync(path);
      files.forEach(function (item, index) {
          let fPath = join(path,item);
          let stat = fs.statSync(fPath);
          if(stat.isDirectory() === true) {
              findJsonFile(fPath);
          }
          if (stat.isFile() === true) { 
            jsonFiles.push(fPath);
          }
      });
  }
  findJsonFile(jsonPath);
  console.log(jsonFiles);
}

getJsonFiles('bathroom_cabinet');

// 遍历所有的目录结构进行内容替换
jsonFiles.forEach(item=>{
  conversionCode(item);
})

// 具体如何替换
function conversionCode(dir){

yaml.read(dir, (err, data) => {
  const res = JSON.parse(JSON.stringify(data));
  let ind = res.variables.findIndex(item=>item.name == 'hydrovalveID');
  let arr = [
    {
      "name": "hyA91160C",
      "type": "uuid",
      "value": '"'+'8aa94bf7-6ca0-49de-91a6-9de740fb3111'+'"'
    },
    {
      "name": "hyST1023CW",
      "type": "uuid",
      "value": '"'+'539a73e8-79a6-12bf-28c6-da80944ee47a'+'"'
    },
    {
      "name": "hyF1A1010C",
      "type": "uuid",
      "value": '"'+'64042589-1dad-133c-822c-7a965c1ea420'+'"'
    },
    {
      "name": "hyK16027TB4CP",
      "type": "uuid",
      "value": '"'+'f2b38a15-dcef-4281-8c3b-ddca6875c064'+'"'
    },
    {
      "name": "hyF1172217CP",
      "type": "uuid",
      "value": '"'+'51fe1de6-1e9a-4f3e-bbeb-38b93ff9ac48'+'"'
    },
    {
      "name": "hy71160007",
      "type": "uuid",
      "value": '"'+'845cc422-162b-4bda-9da8-749f6f6dd923'+'"'
    },
    {
      "name": "hyAMP1115",
      "type": "uuid",
      "value": '"'+'6196f4b9-a050-4774-8eaa-f69a4f70a5a8'+'"'
    },
    {
      "name": "hyK37327T4CP",
      "type": "uuid",
      "value": '"'+'aed147aa-b358-46e2-8289-e63f260a00f1'+'"'
    },
    {
      "name": "hyF16061C2",
      "type": "uuid",
      "value": '"'+'626a8e6f-70bf-4a88-9637-de696dada597'+'"'
    },
    {
      "name": "hyK8670T4MCP",
      "type": "uuid",
      "value": '"'+'d6f7fcf9-ddef-4121-b7c5-f6687109a968'+'"'
    },
    {
      "name": "hy31080007",
      "type": "uuid",
      "value": '"'+'b8a12c76-a128-baa0-e8f4-a998fa97d660'+'"'
    },
    {
      "name": "hyK97347T4CP",
      "type": "uuid",
      "value": '"'+'97da4237-cb56-48fe-bb4d-091c0c51dc3a'+'"'
    },
    {
      "name": "hy31083007",
      "type": "uuid",
      "value": '"'+'3089f2a5-4c38-47c9-864e-334e499698a4'+'"'
    }
  ];
  arr.unshift(ind+1,0);
  Array.prototype.splice.apply(res.variables, arr);

  res.variables.forEach(element => {
    if(element.name == 'hydrovalveXlen'){
      element.value = [
        {
          "conditions": [
            "hydrovalveID == hyA91160C"
          ],
          "value": 0.057
        },
        {
          "conditions": [
            "hydrovalveID == hyST1023CW"
          ],
          "value": 0.051
        },
        {
          "conditions": [
            "hydrovalveID == hyF1A1010C"
          ],
          "value": 0.051
        },
        {
          "conditions": [
            "hydrovalveID == hyK16027TB4CP"
          ],
          "value": 0.0416
        },
        {
          "conditions": [
            "hydrovalveID == hyF1172217CP"
          ],
          "value": 0.048
        },
        {
          "conditions": [
            "hydrovalveID == hy71160007"
          ],
          "value": 0.048
        },
        {
          "conditions": [
            "hydrovalveID == hyAMP1115"
          ],
          "value": 0.045
        },
        {
          "conditions": [
            "hydrovalveID == hyK37327T4CP"
          ],
          "value": 0.0576
        },
        {
          "conditions": [
            "hydrovalveID == hyF16061C2"
          ],
          "value": 0.098
        },
        {
          "conditions": [
            "hydrovalveID == hyK8670T4MCP"
          ],
          "value": 0.175
        },
        {
          "conditions": [
            "hydrovalveID == hy31080007"
          ],
          "value": 0.0534
        },
        {
          "conditions": [
            "hydrovalveID == hyK97347T4CP"
          ],
          "value": 0.051
        },
        {
          "conditions": [
            "hydrovalveID == hy31083007"
          ],
          "value": 0.406
        }
      ]
    }
    if(element.name == 'hydrovalveYlen'){
      element.value = [
        {
          "conditions": [
            "hydrovalveID == hyA91160C"
          ],
          "value": 0.17
        },
        {
          "conditions": [
            "hydrovalveID == hyST1023CW"
          ],
          "value": 0.147
        },
        {
          "conditions": [
            "hydrovalveID == hyF1A1010C"
          ],
          "value": 0.147
        },
        {
          "conditions": [
            "hydrovalveID == hyK16027TB4CP"
          ],
          "value": 0.124
        },
        {
          "conditions": [
            "hydrovalveID == hyF1172217CP"
          ],
          "value": 0.17
        },
        {
          "conditions": [
            "hydrovalveID == hy71160007"
          ],
          "value": 0.144
        },
        {
          "conditions": [
            "hydrovalveID == hyAMP1115"
          ],
          "value": 0.185
        },
        {
          "conditions": [
            "hydrovalveID == hyK37327T4CP"
          ],
          "value": 0.157
        },
        {
          "conditions": [
            "hydrovalveID == hyF16061C2"
          ],
          "value": 0.165
        },
        {
          "conditions": [
            "hydrovalveID == hyK8670T4MCP"
          ],
          "value": 0.0866
        },
        {
          "conditions": [
            "hydrovalveID == hy31080007"
          ],
          "value": 0.149
        },
        {
          "conditions": [
            "hydrovalveID == hyK97347T4CP"
          ],
          "value": 0.203
        },
        {
          "conditions": [
            "hydrovalveID == hy31083007"
          ],
          "value": 0.17
        }
      ]
    }
    if(element.name == 'hydrovalveZlen'){
      element.value = [
        {
          "conditions": [
            "hydrovalveID == hyA91160C"
          ],
          "value": 0.2
        },
        {
          "conditions": [
            "hydrovalveID == hyST1023CW"
          ],
          "value": 0.174
        },
        {
          "conditions": [
            "hydrovalveID == hyF1A1010C"
          ],
          "value": 0.174
        },
        {
          "conditions": [
            "hydrovalveID == hyK16027TB4CP"
          ],
          "value": 0.107
        },
        {
          "conditions": [
            "hydrovalveID == hyF1172217CP"
          ],
          "value": 0.24
        },
        {
          "conditions": [
            "hydrovalveID == hy71160007"
          ],
          "value": 0.122
        },
        {
          "conditions": [
            "hydrovalveID == hyAMP1115"
          ],
          "value": 0.201
        },
        {
          "conditions": [
            "hydrovalveID == hyK37327T4CP"
          ],
          "value": 0.17
        },
        {
          "conditions": [
            "hydrovalveID == hyF16061C2"
          ],
          "value": 0.242
        },
        {
          "conditions": [
            "hydrovalveID == hyK8670T4MCP"
          ],
          "value": 0.111
        },
        {
          "conditions": [
            "hydrovalveID == hy31080007"
          ],
          "value": 0.174
        },
        {
          "conditions": [
            "hydrovalveID == hyK97347T4CP"
          ],
          "value": 0.204
        },
        {
          "conditions": [
            "hydrovalveID == hy31083007"
          ],
          "value": 0.201
        }
      ]
    }
    if(element.name == 'blockHydrovalveHeight'){
      element.value = [
        {
          "conditions": [
            "hydrovalveID == hyST1023CW"
          ],
          "value": 0.16
        },
        {
          "conditions": [
            "hydrovalveID == hyF1A1010C"
          ],
          "value": 0.14
        },
        {
          "conditions": [
            "hydrovalveID == hyK16027TB4CP"
          ],
          "value": 0.124
        },
        {
          "conditions": [
            "hydrovalveID == hyF1172217CP"
          ],
          "value": 0.17
        },
        {
          "conditions": [
            "hydrovalveID == hy71160007"
          ],
          "value": 0.143
        },
        {
          "conditions": [
            "hydrovalveID == hyK37327T4CP"
          ],
          "value": 0.18
        },
        {
          "conditions": [
            "hydrovalveID == hyF16061C2"
          ],
          "value": 0.173
        },
        {
          "conditions": [
            "hydrovalveID == hyK8670T4MCP"
          ],
          "value": 0.173
        },
        {
          "conditions": [
            "hydrovalveID == hy31080007"
          ],
          "value": 0.171
        },
        {
          "conditions": [
            "hydrovalveID == hyK97347T4CP"
          ],
          "value": 0.253
        },
        {
          "conditions": [
            "hydrovalveID == hy31083007"
          ],
          "value": 0.128
        }
      ]
    }
    if(element.name == 'blockHydrovalvePlanY'){
      element.value = [
        {
          "conditions": [
            "hydrovalveID == hyST1023CW"
          ],
          "value": "0.043 + 0.06"
        },
        {
          "conditions": [
            "hydrovalveID == hyF1A1010C"
          ],
          "value": "0.045 + 0.06"
        },
        {
          "conditions": [
            "hydrovalveID == hyK16027TB4CP"
          ],
          "value": "0.036 + 0.06"
        },
        {
          "conditions": [
            "hydrovalveID == hyF1172217CP"
          ],
          "value": "0.057 + 0.06"
        },
        {
          "conditions": [
            "hydrovalveID == hy71160007"
          ],
          "value": "0.04 + 0.06"
        },
        {
          "conditions": [
            "hydrovalveID == hyK37327T4CP"
          ],
          "value": "0.047 + 0.06"
        },
        {
          "conditions": [
            "hydrovalveID == hyF16061C2"
          ],
          "value": "0.058 + 0.06"
        },
        {
          "conditions": [
            "hydrovalveID == hyK8670T4MCP"
          ],
          "value": "0.045 + 0.06"
        },
        {
          "conditions": [
            "hydrovalveID == hy31080007"
          ],
          "value": "0.049 + 0.06"
        },
        {
          "conditions": [
            "hydrovalveID == hyK97347T4CP"
          ],
          "value": "0.074 + 0.06"
        },
        {
          "conditions": [
            "hydrovalveID == hy31083007"
          ],
          "value": "0.05 + 0.06"
        }
      ]
    }
  });
  res.popup.pop();
  let strHy = {
    "type": "component",
    "title": "面盆龙头规格",
    "value": "hydrovalveID",
    "options": [
      '"'+'8aa94bf7-6ca0-49de-91a6-9de740fb3111'+'"',
      '"'+'539a73e8-79a6-12bf-28c6-da80944ee47a'+'"',
      '"'+'64042589-1dad-133c-822c-7a965c1ea420'+'"',
      '"'+'f2b38a15-dcef-4281-8c3b-ddca6875c064'+'"',
      '"'+'51fe1de6-1e9a-4f3e-bbeb-38b93ff9ac48'+'"',
      '"'+'845cc422-162b-4bda-9da8-749f6f6dd923'+'"',
      '"'+'6196f4b9-a050-4774-8eaa-f69a4f70a5a8'+'"',
      '"'+'aed147aa-b358-46e2-8289-e63f260a00f1'+'"',
      '"'+'626a8e6f-70bf-4a88-9637-de696dada597'+'"',
      '"'+'d6f7fcf9-ddef-4121-b7c5-f6687109a968'+'"',
      '"'+'b8a12c76-a128-baa0-e8f4-a998fa97d660'+'"',
      '"'+'97da4237-cb56-48fe-bb4d-091c0c51dc3a'+'"',
      '"'+'3089f2a5-4c38-47c9-864e-334e499698a4'+'"'
    ]
  }
  res.popup.push(strHy);

  // 龙头的symbolName
  let hySymbol = [
    {
      "conditions": [
        "hydrovalveID == hyST1023CW"
      ],
      "value": "金螳螂家4.0图块:龙头-严选尚高"
    },
    {
      "conditions": [
        "hydrovalveID == hyF1A1010C"
      ],
      "value": "金螳螂家4.0图块:龙头-严选法恩莎"
    },
    {
      "conditions": [
        "hydrovalveID == hyK16027TB4CP"
      ],
      "value": "金螳螂家4.0图块:龙头-舒适科勒"
    },
    {
      "conditions": [
        "hydrovalveID == hyF1172217CP"
      ],
      "value": "金螳螂家4.0图块:面盆龙头-舒适-贝朗"
    },
    {
      "conditions": [
        "hydrovalveID == hy71160007"
      ],
      "value": "金螳螂家4.0图块:面盆龙头-舒适-汉斯格雅"
    },
    {
      "conditions": [
        "hydrovalveID == hyK37327T4CP"
      ],
      "value": "金螳螂家4.0图块:龙头-品质标-科勒"
    },
    {
      "conditions": [
        "hydrovalveID == hyF16061C2"
      ],
      "value": "金螳螂家4.0图块:龙头-品质标-贝朗"
    },
    {
      "conditions": [
        "hydrovalveID == hyK8670T4MCP"
      ],
      "value": "金螳螂家4.0图块:龙头-品质高科勒"
    },
    {
      "conditions": [
        "hydrovalveID == hy31080007"
      ],
      "value": "金螳螂家4.0图块:龙头-品质高-汉斯格雅"
    },
    {
      "conditions": [
        "hydrovalveID == hyK97347T4CP"
      ],
      "value": "金螳螂家4.0图块:龙头-尊享科勒"
    },
    {
      "conditions": [
        "hydrovalveID == hy31083007"
      ],
      "value": "金螳螂家4.0图块:龙头-尊享高汉斯格雅"
    }];
  let hyL = [
    {
      "conditions": [
        "hydrovalveID == hyST1023CW"
      ],
      "value": "龙头-严选尚高L"
    },
    {
      "conditions": [
        "hydrovalveID == hyF1A1010C"
      ],
      "value": "龙头-严选法恩莎L"
    },
    {
      "conditions": [
        "hydrovalveID == hyK16027TB4CP"
      ],
      "value": "龙头-舒适科勒L"
    },
    {
      "conditions": [
        "hydrovalveID == hyF1172217CP"
      ],
      "value": "面盆龙头-舒适贝朗L"
    },
    {
      "conditions": [
        "hydrovalveID == hy71160007"
      ],
      "value": "面盆龙头-舒适汉斯格雅L"
    },
    {
      "conditions": [
        "hydrovalveID == hyK37327T4CP"
      ],
      "value": "龙头-品质科勒L"
    },
    {
      "conditions": [
        "hydrovalveID == hyF16061C2"
      ],
      "value": "龙头-品质贝朗L"
    },
    {
      "conditions": [
        "hydrovalveID == hyK8670T4MCP"
      ],
      "value": "龙头-品质高科勒L"
    },
    {
      "conditions": [
        "hydrovalveID == hy31080007"
      ],
      "value": "龙头-品质汉斯格雅L"
    },
    {
      "conditions": [
        "hydrovalveID == hyK97347T4CP"
      ],
      "value": "龙头-尊享科勒L"
    },
    {
      "conditions": [
        "hydrovalveID == hy31083007"
      ],
      "value": "龙头-尊享高汉斯格雅L"
    }
  ];
  let hyC = [
    {
      "conditions": [
        "hydrovalveID == hyST1023CW"
      ],
      "value": "龙头-严选尚高C"
    },
    {
      "conditions": [
        "hydrovalveID == hyF1A1010C"
      ],
      "value": "龙头-严选法恩莎C"
    },
    {
      "conditions": [
        "hydrovalveID == hyK16027TB4CP"
      ],
      "value": "龙头-舒适科勒C"
    },
    {
      "conditions": [
        "hydrovalveID == hyF1172217CP"
      ],
      "value": "面盆龙头-舒适贝朗C"
    },
    {
      "conditions": [
        "hydrovalveID == hy71160007"
      ],
      "value": "面盆龙头-舒适汉斯格雅C"
    },
    {
      "conditions": [
        "hydrovalveID == hyK37327T4CP"
      ],
      "value": "龙头-品质科勒C"
    },
    {
      "conditions": [
        "hydrovalveID == hyF16061C2"
      ],
      "value": "龙头-品质贝朗C"
    },
    {
      "conditions": [
        "hydrovalveID == hyK8670T4MCP"
      ],
      "value": "龙头-品质高科勒C"
    },
    {
      "conditions": [
        "hydrovalveID == hy31080007"
      ],
      "value": "龙头-品质汉斯格雅C"
    },
    {
      "conditions": [
        "hydrovalveID == hyK97347T4CP"
      ],
      "value": "龙头-尊享科勒C"
    },
    {
      "conditions": [
        "hydrovalveID == hy31083007"
      ],
      "value": "龙头-尊享高汉斯格雅C"
    }
  ];
  let hyP = [
    {
      "conditions": [
        "hydrovalveID == hyST1023CW"
      ],
      "value": "龙头-严选尚高P"
    },
    {
      "conditions": [
        "hydrovalveID == hyF1A1010C"
      ],
      "value": "龙头-严选法恩莎P"
    },
    {
      "conditions": [
        "hydrovalveID == hyK16027TB4CP"
      ],
      "value": "龙头-舒适科勒P"
    },
    {
      "conditions": [
        "hydrovalveID == hyF1172217CP"
      ],
      "value": "面盆龙头-舒适贝朗P"
    },
    {
      "conditions": [
        "hydrovalveID == hy71160007"
      ],
      "value": "面盆龙头-舒适汉斯格雅P"
    },
    {
      "conditions": [
        "hydrovalveID == hyK37327T4CP"
      ],
      "value": "龙头-品质科勒P"
    },
    {
      "conditions": [
        "hydrovalveID == hyF16061C2"
      ],
      "value": "龙头-品质贝朗P"
    },
    {
      "conditions": [
        "hydrovalveID == hyK8670T4MCP"
      ],
      "value": "龙头-品质高科勒P"
    },
    {
      "conditions": [
        "hydrovalveID == hy31080007"
      ],
      "value": "龙头-品质汉斯格雅P"
    },
    {
      "conditions": [
        "hydrovalveID == hyK97347T4CP"
      ],
      "value": "龙头-尊享科勒P"
    },
    {
      "conditions": [
        "hydrovalveID == hy31083007"
      ],
      "value": "龙头-尊享高汉斯格雅P"
    }
  ];

  if(res.dwgView){
    res.dwgView.front.modelSymbols[1].symbolName = [];
    res.dwgView.front.modelSymbols[1].symbolName.push(...hySymbol);
    let frontTemp = res.dwgView.front.modelSymbols[1].properties.find(item=>item.name == 'visibility');
    frontTemp.value = [];
    frontTemp.value.push(...hyL);

    res.dwgView.left.modelSymbols[1].symbolName = [];
    res.dwgView.left.modelSymbols[1].symbolName.push(...hySymbol);
    let leftTemp = res.dwgView.left.modelSymbols[1].properties.find(item=>item.name == 'visibility');
    leftTemp.value = [];
    leftTemp.value.push(...hyC);

    res.dwgView.right.modelSymbols[1].symbolName = [];
    res.dwgView.right.modelSymbols[1].symbolName.push(...hySymbol);
    let rightTemp = res.dwgView.right.modelSymbols[1].properties.find(item=>item.name == 'visibility');
    rightTemp.value = [];
    rightTemp.value.push(...hyC);

    res.dwgView.top.modelSymbols[1].symbolName = [];
    res.dwgView.top.modelSymbols[1].symbolName.push(...hySymbol);
    let topTemp = res.dwgView.top.modelSymbols[1].properties.find(item=>item.name == 'visibility');
    topTemp.value = [];
    topTemp.value.push(...hyP);
  }
  
  yaml.write(dir, res, (err) => {
    if(err) {
      console.log(err.toString());
    }
  });
});
}