import os
import unittest

class TestAssets(unittest.TestCase):
    def test_profile_image_exists_and_not_empty(self):
        path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'profile.jpg')
        self.assertTrue(os.path.exists(path), 'profile.jpg should exist')
        self.assertTrue(os.path.getsize(path) > 0, 'profile.jpg should not be empty')

if __name__ == '__main__':
    unittest.main()
