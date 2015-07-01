import React from 'react';

var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

var DataViz = React.createClass({
    mixins: [ReactScriptLoaderMixin],
    getInitialState: function() {
        return {
            scriptLoading: true,
            scriptLoadError: false,
        };
    },

    // this function tells ReactScriptLoaderMixin where to load the script from
    getScriptURL: function() {
        return 'https://online.tableau.com/javascripts/api/tableau_v8.debug.js';
    },

    // ReactScriptLoaderMixin calls this function when the script has loaded
    // successfully.
    onScriptLoaded: function() {
        this.setState({scriptLoading: false});
    },

    // ReactScriptLoaderMixin calls this function when the script has failed to load.
    onScriptError: function() {
        this.setState({scriptLoading: false, scriptLoadError: true});
    },

    componentDidMount: function(){
        var vizDiv = document.getElementById('viz_container');
        var vizURL = "https://10ay.online.tableau.com/#/site/gcvdealsdata/views/Subscription_Beta/RoundSize";
        var options = {
            //width: '1200px',
            //height: '540px',
            hideToolbar: true,
            hideTabs: false
        };
        DataViz = new tableauSoftware.Viz(vizDiv, vizURL, options);
    },

    render: function() {
        var message;
        if (this.state.scriptLoading) {
            message = 'loading script...';
        } else if (this.state.scriptLoadError) {
            message = 'loading failed';
        } else {
            message = 'loading succeeded';
        }
        return <div id="viz_container"></div>;
    }
});

export default DataViz;