import Vue from 'vue'

import ModelObj from './model-obj.vue'
import ModelThree from './model-three.vue'
import ModelStl from './model-stl.vue'
import ModelPly from './model-ply.vue'
import ModelCollada from './model-collada.vue'
import ModelGltf from './model-gltf.vue'
import Model3mf from './model-3mf.vue'

// alias
const ModelJson = Vue.extend( ModelThree, {
    name: 'model-json'
} )

const ModelDae = Vue.extend( ModelCollada, {
    name: 'model-dae'
} )

const components = [
    ModelObj,
    ModelThree,
    ModelJson,
    ModelStl,
    ModelPly,
    ModelCollada,
    ModelDae,
    ModelGltf,
    Model3mf,
]

const install = ( Vue ) => {
    components.map( component => {
        Vue.component( component.name, component );
    } );
}

if ( typeof window !== 'undefined' && window.Vue ) {
    install( window.Vue );
}

export default {
    install,
    ModelObj,
    ModelThree,
    ModelJson,
    ModelStl,
    ModelPly,
    ModelCollada,
    ModelDae,
    ModelGltf,
    Model3mf,
}

export {
    install,
    ModelObj,
    ModelThree,
    ModelJson,
    ModelStl,
    ModelPly,
    ModelCollada,
    ModelDae,
    ModelGltf,
    Model3mf,
}
