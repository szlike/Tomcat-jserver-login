
import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author like
 */
public class Publicdata {
    public static final String filePathString = "auth.txt";
    public static final String uname = "uname";
    public static final String pwd = "pwd";
    
    public final HashMap hmap = new HashMap();;
    
    
    Publicdata() throws FileNotFoundException, UnsupportedEncodingException{
        File f = new File(filePathString);
        if(!f.exists() || f.isDirectory()) { /* do something */
            PrintWriter w = new PrintWriter(filePathString,"UTF-8");
            w.close();
        }
        try (BufferedReader br = new BufferedReader(new FileReader("auth.txt"))){
            
            String line = br.readLine();
            while (line != null){
                String[] separated = line.split("\\s+");
                hmap.put(separated[0], separated[1]);
                line = br.readLine();
            }
            
        } catch (Exception e){
        
        }
    }
    
    Publicdata(boolean value) throws FileNotFoundException, UnsupportedEncodingException{
        File f = new File(filePathString);
        if(!f.exists() || f.isDirectory()) { /* do something */
            PrintWriter w = new PrintWriter(filePathString,"UTF-8");
            w.close();
        }
    }
    
    
    
}
