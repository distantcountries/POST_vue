import moment from 'moment'

export const DateMixins = {
    filters: {
        formatDate(str, outputFormat = 'YYYY-MM-DD HH:mm:ss') {
            return moment(str).format(outputFormat)
        },

        diffForHumans(str) {
            return moment(str).from(moment());
        }
    }
}