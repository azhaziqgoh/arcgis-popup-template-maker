# arcgis-popup-template-maker

This is command line tool to create custom table popup for ArcGIS layer

## Features

- Configure the label and value using json
- Ability to add arcade expression variable
- Default ArcGIS new map beta popup styling. Works with ArcGIS Experience Builder and ArcGIS Dashboard

## Tech
- [Mustache](https://mustache.github.io/) - Templating

## Installation

arcgis-popup-template-maker requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies

```sh
cd arcgis-popup-template-maker
npm i
```

Command to generate template

```sh
node maker.js ./config.json test
```

## Config setup

We maintain config for each of the report type

Sample config structure.

```
{
  "data": [{
    "label": "Report Type",
    "value": "{report_type}"
  },{
    "label": "Project",
    "value": "{project}"
  },{
    "label": "Site Conditions",
    "value": "{site_conditions}"
  }],
  "exp": "{expression/expr0}"
}
```

Data is where all your table row value being populated. You can assign static value or variable in accordance to popup template settings

Exp is where we put arcade expression variable created inside popup configuration.

## License

MIT