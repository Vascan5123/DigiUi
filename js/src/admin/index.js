import SettingsPage from './components/SettingsPage';

app.initializers.add('vascan/digi-ui', () => {
  app.extensionData.for('vascan-digi-ui')
    .registerPage(SettingsPage);
});
