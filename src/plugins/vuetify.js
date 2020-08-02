import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify), {

};

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                'primary': '#0446b0',
                'success': '#04c44e',
                'info': '#b50ac4',
                'error': '#f2340a'
            }
        }


    }
});