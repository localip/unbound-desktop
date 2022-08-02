const { RadioGroup: Radio } = require('@components');
const { React } = require('@webpack/common');

const SettingsItem = require('./SettingsItem');

module.exports = class RadioGroup extends React.PureComponent {
   render() {
      const { title, description, required, ...rest } = this.props;
      const children = this.props.children;
      delete this.props.children;

      return (
         <SettingsItem
            title={title}
            description={description}
            required={required}
            {...rest}
         >
            <Radio {...this.props} />
            {children}
         </SettingsItem>
      );
   }
};