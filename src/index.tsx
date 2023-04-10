import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-twitter-preview' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type TwitterPreviewProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'TwitterPreviewView';

export const TwitterPreviewView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<TwitterPreviewProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
