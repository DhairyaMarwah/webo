import React from 'react'
import { useEffect } from "react";
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js'
import 'grapesjs-project-manager/dist/grapesjs-project-manager.min.css'
import 'grapesjs-project-manager/dist/grapesjs-project-manager.min.js'
import 'grapesjs-template-manager'
// import 'grapesjs-template-manager/dist/css/grapesjs-template-manager.min.css'
// import 'grapesjs-template-manager/dist/grapesjs-project-template.min.js'
const WebBuilder = () => {
    useEffect(() => {
      const editor =      grapesjs.init({
          container: '#gjs',
          height: '700px',
          width: '100%',
          fromElement: true,
          pageManager: true,
          plugins: ['gjs-preset-webpage','gjs-blocks-basic','grapesjs-template-manager','grapesjs-project-manager'],
          styleManager: {
            type: 'indexeddb',
            sectors: [{
                name: 'General',
                open: false,
                buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
              },{
                name: 'Dimension',
                open: false,
                buildProps: ['width', 'flex-width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
                properties: [{
                  id: 'flex-width',
                  type: 'integer',
                  name: 'Width',
                  units: ['px', '%'],
                  property: 'flex-basis',
                  toRequire: 1,
                }]
            },{
              name: 'Decorations',
              open: false,
              buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
            }]
          },
  
          storageManager: {
            id: 'gjs-',
            type: 'local',
            autosave: true,
            storeComponents: true,
            storeStyles: true,
            storeHtml: true,
            storeCss: true,
          },
          deviceManager: {
            devices:
            [
              {
                id: 'desktop',
                name: 'Desktop',
                width: '',
              },
              {
                id: 'tablet',
                name: 'Tablet',
                width: '768px',
                widthMedia: '992px',
              },
              {
                id: 'mobilePortrait',
                name: 'Mobile portrait',
                width: '320px',
                widthMedia: '575px',
              },
            ]
          },

          pluginsOpts: {
            'grapesjs-preset-webpage': {
              blocksBasicOpts: {
                blocks: ['column1', 'column2', 'column3', 'column3-7', 'text',     'link', 'image', 'video'],
                flexGrid: 1,
              },
              blocks: ['link-block', 'quote', 'text-basic'],
            },
            'grapesjs-template-manager':{
              attributes: {
                title: 'Open Templates'
              },
            }
          },
           
        })
        const pn = editor.Panels;
const panelOpts = pn.addPanel({
  id: 'options'
});
panelOpts.get('buttons').add([{
  attributes: {
    title: 'Open Templates'
  },
  className: 'fa fa-file-o',
  command: 'open-templates',//Open modal 
  id: 'open-templates'
}, {
  attributes: {
    title: 'Save As Template'
  },
  className: 'fa fa-archive',
  command: 'save-as-template',//Save page as template
  id: 'save-as-template'
}, {
  attributes: {
    title: 'Delete Template'
  },
  className: 'fa fa-trash-o',
  command: 'delete-template',//Delete open page or template
  id: 'delete-templates'
}, {
  attributes: {
    title: 'Take Screenshot'
  },
  className: 'fa fa-camera',
  command: 'take-screenshot',//Take an image of the canvas
  id: 'take-screenshot'
}]);
      },[])
  return (
    <div id="gjs"></div>
  )
}

export default WebBuilder