<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="9">
          <vgl-renderer class="mainRenderer" antialias
            name="mainRenderer" camera="mainCamera" scene="mainScene" shadow-map-enabled>
            <vgl-scene name="mainScene">
              <vgl-mesh-phong-material
                  name="mat"
                  :color="`rgb(${uniforms.redColor.value}, ${uniforms.greenColor.value}, ${uniforms.blueColor.value})`"
                  :specular="`rgb(200, 100, 100)`"
                  shininess="100"

              />
            <vgl-mesh-phong-material
                  name="matRed"
                  :color="`rgb(${uniforms.redColor.value}, ${uniforms.greenColor.value}, ${uniforms.blueColor.value})`"
                  :specular="`rgb(200, 100, 50)`"
                  shininess="80"
                  map="redTexture"
              />
               <vgl-mesh-phong-material
                  name="matBlue"
                  :color="`rgb(${uniforms.redColor.value}, ${uniforms.greenColor.value}, ${uniforms.blueColor.value})`"
                  :specular="`rgb(200, 100, 50)`"
                  shininess="80"
                  map="blueTexture"
              />
               <vgl-mesh-phong-material
                  name="matGlass"
                  :color="`rgb(${uniforms.redColor.value}, ${uniforms.greenColor.value}, ${uniforms.blueColor.value})`"
                  :specular="`rgb(200, 100, 50)`"
                  shininess="80"
                  map="glassTexture"
              />
               <vgl-mesh-phong-material
                  name="matGreen"
                  :color="`rgb(${uniforms.redColor.value}, ${uniforms.greenColor.value}, ${uniforms.blueColor.value})`"
                  :specular="`rgb(200, 100, 50)`"
                  shininess="80"
                  map="greenTexture"
              />
               <vgl-mesh-phong-material
                  name="matYellow"
                  :color="`rgb(${uniforms.redColor.value}, ${uniforms.greenColor.value}, ${uniforms.blueColor.value})`"
                  :specular="`rgb(200, 100, 50)`"
                  shininess="80"
                  map="yellowTexture"
              />
              <vgl-mesh-standard-material
                  name="std"
                  color="#aaaacc"
              />
              <vgl-texture
                  src="/red.jpg"
                  anisotropy="4"
                  min-filter="linear"
                  wrap-s="mirrored-repeat"
                  wrap-t="mirrored-repeat"
                  name="redTexture"
              />
               <vgl-texture
                  src="/blue.jpg"
                  anisotropy="4"
                  min-filter="linear"
                  wrap-s="mirrored-repeat"
                  wrap-t="mirrored-repeat"
                  name="blueTexture"
              />
               <vgl-texture
                  src="/green.jpg"
                  anisotropy="4"
                  min-filter="linear"
                  wrap-s="mirrored-repeat"
                  wrap-t="mirrored-repeat"
                  name="greenTexture"
              />
               <vgl-texture
                  src="/yellow.jpg"
                  anisotropy="4"
                  min-filter="linear"
                  wrap-s="mirrored-repeat"
                  wrap-t="mirrored-repeat"
                  name="yellowTexture"
              />
               <vgl-texture
                  src="/glass.jpg"
                  anisotropy="4"
                  min-filter="linear"
                  wrap-s="mirrored-repeat"
                  wrap-t="mirrored-repeat"
                  name="glassTexture"
              />
              
             
              <vgl-mesh
                  geometry="plane"
                  material="std"
                  receive-shadow
                  :position="`${plane.position.x} ${plane.position.y  } ${plane.position.z-100}`"
              />

              <vgl-plane-geometry
                  name="plane"
                  width="200"
                  height="200"
              />


               <vgl-sphere-geometry
            name="sphere"
            :radius="parseFloat(sizeMultiply) * 2+ parseFloat(figures.sphere.size)"
             :width-segments="widthSegments"
            :height-segments="heightSegments"
          />  
          <vgl-cylinder-geometry
            name="cylinder"
            :height="height /2"
            :radius-top="parseFloat(figures.cylinder.size /1.5 ) + (sizeMultiply / 4)"
            :radius-bottom="parseFloat(figures.cylinder.size/ 1.5) + (sizeMultiply / 4)"
            :radial-segments="radialSegments"
            :height-segments="cylinderHeightSegments"
          ></vgl-cylinder-geometry>

           <vgl-box-geometry
            name="boxZ"
            :height="sizeMultiply / 3"
            :width="sizeMultiply / 3"
            :depth="height / 2"
            :depth-segments="cylinderHeightSegments"
            :width-segments="cylinderHeightSegments"
            :height-segments="cylinderHeightSegments"
          ></vgl-box-geometry>

          <vgl-box-geometry
            name="boxX"
            :height="sizeMultiply / 3"
            :width="height / 2"
            :depth="sizeMultiply / 3"
            :depth-segments="cylinderHeightSegments"
            :width-segments="cylinderHeightSegments"
            :height-segments="cylinderHeightSegments"
          ></vgl-box-geometry>


                <vgl-mesh
            material="matRed"
            name="sphereMesh"
            geometry="sphere"
            cast-shadow receive-shadow
            :position="`${figures.sphere.position.x} ${figures.sphere.position.y} ${figures.sphere.position.z}`"
            :rotation="`${figures.sphere.rotation.x} ${figures.sphere.rotation.y} ${figures.sphere.rotation.z} XYZ`"
          />

          <vgl-mesh
            material="matYellow"
            name="sphereMesh"
            geometry="sphere"
            cast-shadow receive-shadow
            :position="`${figures.sphere.position.x + 40} ${figures.sphere.position.y} ${figures.sphere.position.z}`"
            :rotation="`${figures.sphere.rotation.x} ${figures.sphere.rotation.y} ${figures.sphere.rotation.z} XYZ`"
          />

          <vgl-mesh
            material="matYellow"
            name="sphereMesh"
            geometry="sphere"
            cast-shadow receive-shadow
            :position="`${figures.sphere.position.x} ${figures.sphere.position.y -40 } ${figures.sphere.position.z}`"
            :rotation="`${figures.sphere.rotation.x} ${figures.sphere.rotation.y} ${figures.sphere.rotation.z} XYZ`"
          />

          <vgl-mesh
            material="matBlue"
            name="sphereMesh"
            geometry="sphere"
            cast-shadow receive-shadow
            :position="`${figures.sphere.position.x + 40} ${figures.sphere.position.y -40 } ${figures.sphere.position.z}`"
            :rotation="`${figures.sphere.rotation.x} ${figures.sphere.rotation.y} ${figures.sphere.rotation.z} XYZ`"
          />

             <vgl-mesh
            material="matBlue"
            name="sphereMesh"
            geometry="sphere"
            cast-shadow receive-shadow
            :position="`${figures.sphere.position.x} ${figures.sphere.position.y} ${figures.sphere.position.z -40 }`"
            :rotation="`${figures.sphere.rotation.x} ${figures.sphere.rotation.y} ${figures.sphere.rotation.z} XYZ`"
          />

          <vgl-mesh
            material="matGreen"
            name="sphereMesh"
            geometry="sphere"
            cast-shadow receive-shadow
            :position="`${figures.sphere.position.x + 40} ${figures.sphere.position.y} ${figures.sphere.position.z -40}`"
            :rotation="`${figures.sphere.rotation.x} ${figures.sphere.rotation.y} ${figures.sphere.rotation.z} XYZ`"
          />

          <vgl-mesh
            material="matGreen"
            name="sphereMesh"
            geometry="sphere"
            cast-shadow receive-shadow
            :position="`${figures.sphere.position.x} ${figures.sphere.position.y -40 } ${figures.sphere.position.z -40}`"
            :rotation="`${figures.sphere.rotation.x} ${figures.sphere.rotation.y} ${figures.sphere.rotation.z} XYZ`"
          />

          

          <vgl-mesh
            material="matRed"
            name="sphereMesh"
            geometry="sphere"
            cast-shadow receive-shadow
            :position="`${figures.sphere.position.x + 40} ${figures.sphere.position.y -40 } ${figures.sphere.position.z - 40}`"
            :rotation="`${figures.sphere.rotation.x} ${figures.sphere.rotation.y} ${figures.sphere.rotation.z} XYZ`"
          />

           <vgl-mesh
            material="matGlass"
            name="cylinderMesh"
            geometry="cylinder"
            cast-shadow receive-shadow
            :position="`${figures.cylinder.position.x} ${figures.cylinder.position.y -40 } ${figures.cylinder.position.z -40}`"
            :rotation="`${figures.cylinder.rotation.x} ${figures.cylinder.rotation.y} ${figures.cylinder.rotation.z} XYZ`"
          ></vgl-mesh>
           <vgl-mesh
            material="matGlass"
            name="cylinderMesh"
            geometry="cylinder"
            cast-shadow receive-shadow
            :position="`${figures.cylinder.position.x +40} ${figures.cylinder.position.y -40 } ${figures.cylinder.position.z -40}`"
            :rotation="`${figures.cylinder.rotation.x} ${figures.cylinder.rotation.y} ${figures.cylinder.rotation.z} XYZ`"
          ></vgl-mesh>
          <vgl-mesh
            material="matYellow"
            name="cylinderMesh"
            geometry="cylinder"
            cast-shadow receive-shadow
            :position="`${figures.cylinder.position.x} ${figures.cylinder.position.y -40 } ${figures.cylinder.position.z}`"
            :rotation="`${figures.cylinder.rotation.x} ${figures.cylinder.rotation.y} ${figures.cylinder.rotation.z} XYZ`"
          ></vgl-mesh>
           <vgl-mesh
            material="matGlass"
            name="cylinderMesh"
            geometry="cylinder"
            cast-shadow receive-shadow
            :position="`${figures.cylinder.position.x +40} ${figures.cylinder.position.y -40 } ${figures.cylinder.position.z }`"
            :rotation="`${figures.cylinder.rotation.x} ${figures.cylinder.rotation.y} ${figures.cylinder.rotation.z} XYZ`"
          ></vgl-mesh>
           
          <vgl-mesh
            material="matGlass"
            name="boxMesh"
            geometry="boxZ"
            cast-shadow receive-shadow
            :position="`${figures.container.position.x +40} ${figures.container.position.y -40 } ${figures.container.position.z }`"
            :rotation="`${figures.container.rotation.x} ${figures.container.rotation.y} ${figures.container.rotation.z} XYZ`"
          ></vgl-mesh>

          <vgl-mesh
            material="matGlass"
            name="boxMesh"
            geometry="boxZ"
            cast-shadow receive-shadow
            :position="`${figures.container.position.x } ${figures.container.position.y -40 } ${figures.container.position.z }`"
            :rotation="`${figures.container.rotation.x} ${figures.container.rotation.y} ${figures.container.rotation.z} XYZ`"
          ></vgl-mesh>

          <vgl-mesh
            material="matRed"
            name="boxMesh"
            geometry="boxZ"
            cast-shadow receive-shadow
            :position="`${figures.container.position.x +40} ${figures.container.position.y  } ${figures.container.position.z }`"
            :rotation="`${figures.container.rotation.x} ${figures.container.rotation.y} ${figures.container.rotation.z} XYZ`"
          ></vgl-mesh>

          <vgl-mesh
            material="matGlass"
            name="boxMesh"
            geometry="boxZ"
            cast-shadow receive-shadow
            :position="`${figures.container.position.x } ${figures.container.position.y  } ${figures.container.position.z }`"
            :rotation="`${figures.container.rotation.x} ${figures.container.rotation.y} ${figures.container.rotation.z} XYZ`"
          ></vgl-mesh>

          <vgl-mesh
            material="matGlass"
            name="boxMesh"
            geometry="boxX"
            cast-shadow receive-shadow
            :position="`${figures.container.position.x +20 } ${figures.container.position.y  } ${figures.container.position.z -20}`"
            :rotation="`${figures.container.rotation.x} ${figures.container.rotation.y} ${figures.container.rotation.z} XYZ`"
          ></vgl-mesh>
           <vgl-mesh
            material="matGlass"
            name="boxMesh"
            geometry="boxX"
            cast-shadow receive-shadow
            :position="`${figures.container.position.x +20 } ${figures.container.position.y  } ${figures.container.position.z +20}`"
            :rotation="`${figures.container.rotation.x} ${figures.container.rotation.y} ${figures.container.rotation.z} XYZ`"
          ></vgl-mesh>
          <vgl-mesh
            material="matRed"
            name="boxMesh"
            geometry="boxX"
            cast-shadow receive-shadow
            :position="`${figures.container.position.x +20 } ${figures.container.position.y  -40} ${figures.container.position.z -20}`"
            :rotation="`${figures.container.rotation.x} ${figures.container.rotation.y} ${figures.container.rotation.z} XYZ`"
          ></vgl-mesh>
           <vgl-mesh
            material="matGlass"
            name="boxMesh"
            geometry="boxX"
            cast-shadow receive-shadow
            :position="`${figures.container.position.x +20 } ${figures.container.position.y  -40} ${figures.container.position.z +20}`"
            :rotation="`${figures.container.rotation.x} ${figures.container.rotation.y} ${figures.container.rotation.z} XYZ`"
          ></vgl-mesh>


              <vgl-ambient-light color="#ffeecc"/>
              <vgl-spot-light
                  name="light"
                  :position="`${spotLight.position.x} ${spotLight.position.y} ${spotLight.position.z}`"
                  :color="`rgb(${spotLight.color.r}, ${spotLight.color.g}, ${spotLight.color.b})`"
                  :distance="0"
                  :angle="spotLight.angle"
                  :target="`${spotLight.target.x} ${spotLight.target.y} ${spotLight.target.z}`"
                  cast-shadow
              />
            </vgl-scene>
            <vgl-perspective-camera
                :orbit-position="`${cameraPosition.r.value} ${cameraPosition.theta.value} ${cameraPosition.phi.value}`"
                name="mainCamera"/>
          </vgl-renderer>
        </b-col>
        <b-col cols="3">
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                    class="w-100"
                    @click="$root.$emit('bv::toggle::collapse', 'accordion-all')"
                    variant="dark">Все фигуры
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-all" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <div>
                      <label v-for="(color, index) in Object.keys(uniforms).filter(key => key.includes('Color'))" :key="color+index">
                        {{ color }}
                        <input
                            v-model.number="uniforms[color].value"
                            class="slider"
                            type="range"
                            max="255"
                            step="1">
                      </label>
                    </div>
                    <div>
                      <label>
                        Size
                        <input
                            v-model="sizeMultiply"
                            type="range"
                            max="50"
                            step="0.5">
                      </label>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1" v-for="(figure, index) in Object.keys(figures)" :key="index">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                    class="w-100"
                    @click="$root.$emit('bv::toggle::collapse', 'accordion-' + figures[figure].title)"
                    variant="dark">{{ figures[figure].title }}
                </b-button>
              </b-card-header>
              <b-collapse :id="'accordion-' + figures[figure].title" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <div>
                      <label v-for="(coord, index) in Object.keys(figures[figure].position)" :key="index">
                        Позиция {{ coord }}
                        <input
                            v-model="figures[figure].position[coord]"
                            type="range"
                            max="100"
                            min="-100"
                            step="1">
                      </label>
                    </div>
                    <div>
                      <label v-for="(coord, index) in Object.keys(figures[figure].rotation)" :key="index">
                        Поворот {{ coord }}
                        <input
                            v-model="figures[figure].rotation[coord]"
                            type="range"
                            max="2"
                            min="-2"
                            step="0.01">
                      </label>
                    </div>
                    <div>
                      <label>
                        Размер
                        <input
                            v-model="figures[figure].size"
                            type="range"
                            max="50"
                            step="0.01">
                      </label>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                    class="w-100"
                    @click="$root.$emit('bv::toggle::collapse', 'accordion-light')"
                    variant="dark">Свет
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-light" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <div>
                      <label v-for="(coord, index) in Object.keys(spotLight.position)" :key="index">
                        Позиция источника {{ coord }}
                        <input
                            v-model="spotLight.position[coord]"
                            type="range"
                            max="100"
                            min="-100"
                            step="1">
                      </label>
                    </div>
                    <div>
                      <label v-for="(coord, index) in Object.keys(spotLight.target)" :key="index">
                        Позиция цели {{ coord }}
                        <input
                            v-model="spotLight.target[coord]"
                            type="range"
                            max="100"
                            min="-100"
                            step="1">
                      </label>
                    </div>
                    <div>
                      <label v-for="(color, index) in Object.keys(spotLight.color)" :key="index">
                        Цвет {{ color }}
                        <input
                            v-model="spotLight.color[color]"
                            type="range"
                            max="255"
                            min="0"
                            step="1">
                      </label>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                    class="w-100"
                    @click="$root.$emit('bv::toggle::collapse', 'accordion-camera')"
                    variant="dark">Камера
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-camera" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <div>
                      <label v-for="(coord, index) in Object.keys(cameraPosition)" :key="coord+index">
                        {{ cameraPosition[coord].title }}
                        <input
                            v-model.number="cameraPosition[coord].value"
                            class="slider"
                            type="range"
                            :max="cameraPosition[coord].max"
                            :step="cameraPosition[coord].step">
                      </label>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {
  VglAmbientLight,
  VglMesh,
  VglTexture,
  VglMeshPhongMaterial,
  VglMeshStandardMaterial,
  VglPerspectiveCamera,
  VglRenderer,
  VglPlaneGeometry,
  VglScene,
  VglSpotLight,
    VglSphereGeometry,
    VglCylinderGeometry,
    VglBoxGeometry,
} from 'vue-gl'

import {vertexShader} from '@/shaders/vertexShader'
import {fragmentShader} from '@/shaders/fragmentShader'

export default {
  name: 'Lr3',
  components: {
    VglAmbientLight,
    VglTexture,
    VglMeshStandardMaterial,
    VglSpotLight,
    VglRenderer,
      VglPlaneGeometry,
    VglMeshPhongMaterial,
    VglScene,
    VglPerspectiveCamera,
    VglMesh,

      VglSphereGeometry,
    VglCylinderGeometry,
    VglBoxGeometry,
  },
  data() {
    return {
      //cylinder
      height: 80,
      radiusTop: 20,
      radiusBottom: 20,
      radialSegments: 16,
      cylinderHeightSegments: 4,
      //sphere
      widthSegments: 32,
      heightSegments: 16,
      cameraPerspective: true,
      sizeMultiply: 5,
      zoom: 10,
      spotLight: {
        position: {
          x: 30,
          y: 30,
          z: 30
        },
        target: {
          x: -30,
          y: -30,
          z: -30
        },
        color: {
          r: 0,
          g: 255,
          b: 255
        },
        distance: 10,
        angle: 0.5
      },
      cameraPosition: {
        r: {
          value: 100,
          step: 0.5,
          max: 300,
          title: 'Радиус'
        },
        theta: {
          value: 1.5,
          step: 0.05,
          max: 3,
          title: 'Зенитный угол'
        },
        phi: {
          value: 0.1,
          step: 0.05,
          max: 6,
          title: 'Азимутальный угол'
        },
      },
      uniforms: {
        redColor: { value: 255 },
        offsetX: { value: 0.0 },
        offsetY: { value: 0.0 },
        offsetZ: { value: 0.0 },
        greenColor: { value: 255 },
        blueColor: { value: 255 }
      },
      plane:{
          position: {x: -30, y: 5, z: 0},
        },
      figures: {
        sphere:{
          title: 'Сферы',
          size: 0,
          position: {x: -30, y: 5, z: 0},
          rotation: {x: 0, y: 0, z: 0},
        },
        
        cylinder:{
          title: 'Цилиндры вертикальные',
          size: 0,
          position: {x: -30, y: 22.5, z: 0},
          rotation: {x: 0, y: 0, z: 0},
        },
        container:{
          title: 'Контейнеры горизонтальные',
          size: 0,
          position: {x: -30, y: 3, z: -20},
          rotation: {x: 0, y: 0, z: 0},
        },
       
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    }
  }
}
</script>

<style scoped>
.mainRenderer {
  height: 80vh;
  width: 100%;
}
</style>
