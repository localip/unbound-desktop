const { Switch: SwitchItem } = require('@components');
const { React } = require('@webpack/common');

const SettingsItem = require('./SettingsItem');

module.exports = class Switch extends React.PureComponent {
   render() {
      const { title, description, required, ...rest } = this.props;
      delete this.props.children;

      return (
         <SettingsItem
            description={description}
            required={required}
            {...rest}
         >
            <div className='unbound-settings-switch-container'>
               <div className='unbound-settings-switch-title'>
                  {title}
               </div>
               <SwitchItem {...this.props} />
            </div>
         </SettingsItem>
      );
   }
};