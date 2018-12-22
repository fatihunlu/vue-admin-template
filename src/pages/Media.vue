<template>
  <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-card color="white">
            <v-card-text>
              Media Widgets
            </v-card-text>
            <v-card-text>
              Great for your media content!
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex lg4 sm12 v-for="(item,index) in items" :key="item.id">
          <v-card color="white">
            <v-layout row justify-space-between class="ma-0">
              <v-flex xs2>
                <v-icon size="64" :color="item.color">{{ item.icon }}</v-icon>
              </v-flex>
              <v-flex xs3 class="text-sm-right">
                <span :style="{color: item.color, fontWeight: 'bold', fontSize: '16px'}">
                  {{ item.text }}
                </span>
                <span>
                  {{ item.subText }}
                </span>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          color: 'blue',
          icon: 'picture_as_pdf',
          text: '1.221 Files',
          subText: 'pdf files'
        },
        {
          id: 2,
          color: 'red',
          icon: 'music_video',
          text: '250 Albums',
          subText: 'in Comedy'
        },
        {
          id: 3,
          color: 'purple',
          icon: 'attach_file',
          text: '61.150 Files',
          subText: 'in File'
        },
        {
          id: 4,
          color: 'teal',
          icon: 'perm_media',
          text: '3.250 Medias',
          subText: 'in Profile'
        },
        {
          id: 5,
          color: 'blue',
          icon: 'cloud',
          text: '1.250 Datas',
          subText: 'in Cloud'
        },
        {
          id: 6,
          color: 'black',
          icon: 'audiotrack',
          text: '3.250 Audios',
          subText: 'in General'
        },
        {
          id: 7,
          color: '#75e569',
          icon: 'collections',
          text: '2.350 Medias',
          subText: 'in Profile'
        },
        {
          id: 8,
          color: '#e5d769',
          icon: 'create_new_folder',
          text: '150 Folders',
          subText: 'in Repository'
        },
        {
          id: 9,
          color: '#ba234b',
          icon: 'headset',
          text: '3.250 Musics',
          subText: 'in Pop'
        }
      ]
    }
  }
}
</script>
<style >

</style>
