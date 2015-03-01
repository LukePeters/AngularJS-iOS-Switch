# AngularJS iOS Switch

A simple AngularJS directive which creates an iOS-styled switch. The switch is connected to a data model and can be toggled on and off.

## Usage

1. Include the **ios-switch.css** file in your page.
2. Include the **ios-switch-directive.js** file in your page after AngularJS is loaded.
3. Make sure the correct module name is being referenced in the **ios-switch-directive.js** file - it is currently referencing a module named "app", but you should change this to whatever your module name is.
4. Include the following HTML where you'd like the switch to appear: 
  5. ```<span class="iosSwitch" ng-model="post.published" ng-class="{checked: post.published}" ng-click="post.published = !post.published" ios-switch></span>```
6.  Change the model to match the data model you'd like the switch to be connected with in your app. Also change the ng-class and ng-click behavoir as necessary to fit your usage.

That's it!
