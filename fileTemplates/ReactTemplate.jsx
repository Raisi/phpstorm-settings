(function() {
    CTComponents.${NAME} = React.createClass({
        /**
         * The displayName string is used in debugging messages
         */
        displayName: '${NAME}',

        /**
         * The propTypes object allows you to validate props being passed to your components. For more information about
         * propTypes, see {@link https://facebook.github.io/react/docs/reusable-components.html Reusable Components}.
         */
        propTypes: {
            /**
             * Define `data` to be an instance of `CTGroupSelection.Block`
             * @param props
             * @param propName
             * @param componentName
             * @return {void|Error}
             */
            param: function(props, propName, componentName) {
                
            }
        },

        /**
         * Invoked once before the component is mounted.
         * The return value will be used as the initial value of `this.state`.
         */
        getInitialState: function() {
            return {};
        },

        /**
         * Invoked once and cached when the class is created.
         * Values in the mapping will be set on this.props if that prop is not specified by the parent component.
         * {@link https://facebook.github.io/react/docs/component-specs.html#getdefaultprops}
         * 
         * @return {{}}
         */
        getDefaultProps: function() {
            return {}
        },
        
        /************************************************************************************************************/
        /*                                        Custom Component Functions                                        */
        /************************************************************************************************************/

        
        yourCustomFunction: function() {
            
        },
        
        
        /************************************************************************************************************/
        /*                                        Render Function                                        */
        /************************************************************************************************************/
        render: function() {
            var _this = this;
            
            return (
                <div>This is your ${NAME}-Component</div>
            );
        }
    })
}());