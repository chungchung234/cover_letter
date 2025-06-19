import os
import json
import unittest

class TestManifest(unittest.TestCase):
    def test_manifest_parses_and_icons_exist(self):
        root_dir = os.path.dirname(os.path.dirname(__file__))
        manifest_path = os.path.join(root_dir, 'manifest.json')
        with open(manifest_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        self.assertIn('icons', data)
        self.assertIsInstance(data['icons'], list)
        for icon in data['icons']:
            self.assertIn('src', icon)
            icon_path = os.path.join(root_dir, icon['src'])
            self.assertTrue(os.path.exists(icon_path), f"Icon {icon['src']} should exist")

if __name__ == '__main__':
    unittest.main()
