<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex sm12>
            <h4>Basic</h4>
          </v-flex>
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'mini' + index">
            <social-widget
              mini
              v-bind="item">
            </social-widget>
          </v-flex>
          <v-flex sm12>
            <h4>Normal</h4>
          </v-flex>
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'basic' + index">
            <social-widget v-bind="item">
            </social-widget>
          </v-flex>
          <v-flex sm12>
            <h4>Name Card with top nav</h4>
          </v-flex>
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'basic-top-nav' + index">
            <social-widget
              top-nav
              v-bind="item">
            </social-widget>
          </v-flex>
          <v-flex sm12>
            <h4>Bottom Nav Name Card</h4>
          </v-flex>
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'bottom-nav' + index">
            <social-widget
              bottom-nav
              v-bind="item">
            </social-widget>
          </v-flex>
          <v-flex sm12>
            <h4>Contact Card</h4>
          </v-flex>
          <!-- <v-flex lg4 sm12>
            <profile-card></profile-card>
          </v-flex> -->
        </v-layout>
      </v-container>
</template>

<script>
export default {
  data () {
    return {
      users: [
        {
          jobTitle: 'Web Developer',
          name: 'Michael Wang',
          color: '#ba234b',
          dark: true,
          avatar: {
            src: 'https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat4&accessoriesType=Prescription01&hatColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Black&graphicType=Selena&eyeType=Squint&eyebrowType=AngryNatural&mouthType=Default&skinColor=DarkBrown',
            size: '36'
          }
        },
        {
          jobTitle: 'Web Designer',
          name: 'Jessie J',
          color: '#e57b09',
          dark: true,
          avatar: {
            src: 'https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat1&accessoriesType=Sunglasses&hatColor=Red&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
            size: '36'
          }
        },
        {
          jobTitle: 'Web Developer',
          name: 'Jim J',
          color: 'teal',
          dark: true,
          avatar: {
            src: 'https://avataaars.io/?avatarStyle=Transparent&topType=Hat&accessoriesType=Sunglasses&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Light',
            size: '36'
          },
        },
        {
          jobTitle: 'Product Manager',
          name: 'John Doe',
          color: '#a51288',
          dark: true,
          cardBgImage: '/static/bg/15.jpg',
          avatar: {
            src: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=WinkWacky&eyebrowType=SadConcerned&mouthType=ScreamOpen&skinColor=Brown',
            size: '36'
          },
        },
      ]
    }
  }
}
</script>

<style>

</style>
