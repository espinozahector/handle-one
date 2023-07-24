#!/usr/bin/python3

from instagrapi import Client
from threads import Threads

import json

class ThreadsUsernameChecker:
    def __init__(self, user: str, passwd: str):
        self.user = user
        self.passwd = passwd
        
        self.api = Threads(username = self.user, password = self.passwd)

    def name_check(self, names: list) -> dict:
        results = {}
        for name in names:
            try:
                self.api.public_api.get_user_id(name)
                results[name] = True
            
            except Exception as e:
                results[name] = False
        
        return results

class InstaUsernameChecker:
    def __init__(self, user: str, passwd: str):
        self.user = user
        self.passwd = passwd

        self.api = Client()
        self.api.login(self.user, self.passwd)        
        
    def name_check(self, names: list) -> dict:
        results = {}
        for name in names:
            try:
                self.api.user_id_from_username(name)
                results[name] = True
            
            except Exception as e:
                results[name] = False
        
        return results

class UsernameChecker:
    def __init__(self, config_path: str):
        self.config_path = config_path
        self.config = self.load_config()
        
        self.threads_checker = ThreadsUsernameChecker(self.config['user'], self.config['passwd'])
        self.insta_checker = InstaUsernameChecker(self.config['user'], self.config['passwd'])

    def load_config(self) -> None:
        with open(self.config_path) as f:
            return json.load(f)
    
    def validate_requester(self, requester: str) -> bool:
        # Implement some logic to ensure requester is registered 
        return True
    
    def check_usernames(self, names: list, requester: str) -> dict:
        results = {'results': {}}
        if not self.validate_requester(requester):
            return {"results": "None"}
        
        results['results']['instagram'] = self.insta_checker.name_check(names)
        results['results']['threads'] = self.threads_checker.name_check(names)

        return results


if __name__ == "__main__":
    print("Starting")
